import { nextauthOptions } from "@/utils/nextauthOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextauthOptions);

export { handler as GET, handler as POST };
