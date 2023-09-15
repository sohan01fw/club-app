import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { ConnectToDB } from "./mongoose";
import AuthUser from "./Models/authuser.model";
import { StoreUser, updateStoreUser } from "./actions/AuthUser.action";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  providers: [
    //Github provider
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    //Facebook provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),

    //Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        ConnectToDB();
        const email = credentials?.email || "";
        const password = credentials?.password || "";

        try {
          const user = await AuthUser.findOne({
            email: credentials?.email,
          });

          if (!user || user?.password === "") {
            await updateStoreUser({ email, password });

            const userData = await AuthUser.findOne({
              email: credentials?.email,
            });

            return {
              ...userData,
              redirectUrl: "/profile", // Specify the profile page URL
            };
          }

          return user;
        } catch (error: any) {
          throw new Error("error user not save to db", error);
        }
        return null;
      },
    }),
    // ...add more providers here
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

        // Save the user's email to your database
        await StoreUser({ email: userEmailFormGoogle });
      }
      return true;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      /* session.accessToken = token.accessToken
      session.user.id = token.id */
      console.log("sesssion", session);
      return { ...session, id: token.sub };
    },
  },
};
