import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUer";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response(
        JSON.stringify({
          message: "User Id required",
        }),
        {
          status: 401,
        }
      );
    }
    const { userId } = sessionUser;
    const readMessages = await Message.find({ receiver: userId })
      .sort({ createdAt: -1 })
      .populate("sender", "username")
      .populate("property", "name");

    return new Response(JSON.stringify(readMessages), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Something Went Wrong", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const { email, name, phone, message, property, receiver } =
      await req.json();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response(
        JSON.stringify({
          message: "You must login to send the message",
        }),
        {
          status: 401,
        }
      );
    }
    const { user } = sessionUser;
    if (user.id === receiver) {
      return new Response(
        JSON.stringify({ message: "Can not send the message to your self" }),
        { status: 400 }
      );
    }
    const newMessage = new Message({
      sender: user.id,
      receiver,
      property,
      email,
      name,
      phone,
      body: message,
    });

    await newMessage.save();
    return new Response(JSON.stringify({ message: "Message sent" }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify("Smething went wrong"), {
      status: 500,
    });
  }
};
