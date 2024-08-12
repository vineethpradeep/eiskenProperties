import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUer";

export const dynamic = "force-dynamic";

export const PUT = async (req, { params }) => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id required", {
        status: 401,
      });
    }
    const { userId } = sessionUser;

    const message = await Message.findById(params.id);
    if (!message) {
      return new Response("No Message found", { status: 404 });
    }
    if (message.receiver.toString() !== userId) {
      return new Response("UnAuthorised User", { status: 401 });
    }
    message.read = !message.read;
    await message.save();
    return new Response(JSON.stringify(message), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id required", {
        status: 401,
      });
    }
    const { userId } = sessionUser;

    const message = await Message.findById(params.id);
    if (!message) {
      return new Response("No Message found", { status: 404 });
    }
    if (message.receiver.toString() !== userId) {
      return new Response("UnAuthorised User", { status: 401 });
    }

    await message.deleteOne();

    return new Response("Message Deleted", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
