import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import { postSignin } from '@/services/auth.service';

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
                if(credentials === undefined){
                    return null
                }

                const user = await postSignin(credentials);

                if(!!user.id){
                    return user
                }
                return null
            }
        }),
    ],
    // pages:{
    //     signIn: "/"
    // },
    callbacks: {
        async jwt(data){
            return data
        },
        async session(data:any){
            return data
        }
    },
}