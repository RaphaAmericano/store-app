import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import { postSignin } from '@/services/auth.service';
import { redirect } from 'next/navigation';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "credentials",
            credentials:{
                email: { label: "email", type: "text"},
                password: { label: "password", type:"password"}
            },
            async authorize(credentials, req){
                if(!credentials?.email || !credentials?.password) return null; 

                const user = await postSignin(credentials);
                
                if(user.id){
                    console.log("user: ",user)
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log({ token, user })
            // if(user) return {...token, ...user }
            return token
        },
        async session({ session, token, user }) {
            console.log({ session, token, user })
            // session.user = token.user 
            return session
        },
    }
}