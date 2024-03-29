import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image:string;
      avatar?:string;
      picture?:string;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
        id: string;
        email: string;
        name: string;
        image:string;
        avatar?:string;
        picture?:string;
    };
  }
}