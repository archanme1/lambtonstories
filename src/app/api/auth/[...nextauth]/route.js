import connect from "@/utils/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "1001753421020-5877vr8u3nfmouqkrttum0nl3p2edqsa.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordRight = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordRight) {
              return user;
            } else {
              throw new Error("Credentials are wrong");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
