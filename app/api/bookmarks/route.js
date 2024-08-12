import connectDB from "@/config/database";
import User from "@/models/User";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/getSessionUer";

export const dynamic = "force-dynamic";

// Bookmark properties
export const GET = async () => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is required", { status: 401 });
    }
    const { userId } = sessionUser;
    const user = await User.findOne({ _id: userId });

    const bookmarksProperties = await Property.find({
      _id: { $in: user.bookmarks },
    });
    return new Response(JSON.stringify(bookmarksProperties), {
      status: 200,
    });
  } catch (err) {
    console.log("Something went wrong");
    return new Response("Something went wrong", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const { propertyId } = await req.json();
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is required", { status: 401 });
    }
    const { userId } = sessionUser;
    const user = await User.findOne({ _id: userId });

    let isBookmarked = user.bookmarks.includes(propertyId);

    let message;
    if (isBookmarked) {
      user.bookmarks.pull(propertyId);
      message = "Bookmark removed successsfully";
      isBookmarked = false;
    } else {
      user.bookmarks.push(propertyId);
      message = "Bookmark added successfully";
      isBookmarked = true;
    }

    await user.save();
    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
