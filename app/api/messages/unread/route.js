import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUer";

export const dynamic = "force-dynamic";
// unread messages count
export const GET = async (req) => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id required", {
        status: 401,
      });
    }
    const { userId } = sessionUser;

    const count = await Message.countDocuments({
      receiver: userId,
      read: false,
    });

    return new Response(JSON.stringify(count), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
