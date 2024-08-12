import { getServerSession } from "next-auth/next";
import { nextauthOptions } from "@/utils/nextauthOptions";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(nextauthOptions);
    if (!session || !session.user) {
      return null;
    }
    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};
