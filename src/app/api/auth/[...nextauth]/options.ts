// options.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        const existinguser = {
          id: "43",
         name: "nmudenna",
          password: "nextAuth",
        };

        if (
          credentials?.username === existinguser.name&&
          credentials?.password === existinguser.password
        ) {
          return Promise.resolve(existinguser);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    strategy:"jwt"
  }
};
