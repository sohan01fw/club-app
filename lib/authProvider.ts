import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import AuthUser from "./Models/authuser.model";
import { StoreUser, updateStoreUser } from "./actions/AuthUser.action";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // Github provider
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    // Facebook provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),

    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // Credentials provider
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";

        try {
          // Find the user in the database
          let user = await AuthUser.findOne({ email });

          if (!user || user?.password !== password) {
            throw new Error("401");
          } else if (user?.password === "") {
            throw new Error("400");
          }

          return { ...user.toObject(), redirectUrl: "/profile" };
        } catch (error: any) {
          throw error;
        }

        return null;
      },
    }),
  ],

  // this is for redirection to sigin page using next-auth
  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile?.email) {
        const userEmailFormGoogle = profile.email;
        const userData = await AuthUser.findOne({ email: userEmailFormGoogle });

        // Save the user's email to your database
        if (!userData) {
          await StoreUser({ email: userEmailFormGoogle, password: "" });
        }
      }

      return true;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      /* session.accessToken = token.accessToken
      session.user.id = token.id */

      const userEmail = session.user?.email;
      const userDta = await AuthUser.findOne({ email: userEmail });

      return { ...session, id: userDta._id.toString() };
    },
  },
};
