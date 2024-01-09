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
            id:"custom-api",
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
                console.log(user)
                if(user){
                    console.log("user: ",user)
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
    // session:{
    //     strategy: "jwt",
    //     maxAge: 30 * 24 * 60 * 60 
    // },
    pages:{
        // signIn: "/",
        error: "/error"
    },
    callbacks: {
        async session({ session, token }:any ){
            return session
        },
        jwt(params:any) {     
            // console.log("callback jwt", params)       
            return params
        }
        
    },
    events:{
        async signOut(event:any){
            // console.log("signOut",event)
        },
        async signIn(event:any){
            // console.log(event)
        }
        
    }
}