import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
// import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { connectToMongoDB } from "../../../../lib/mongobd";
import User from "../../../../models/user";
import { compare } from 'bcrypt'
import { IUser } from "./signup";

const options: NextAuthOptions = {
 providers:[
  GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
  GoogleProvider({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
  CredentialsProvider({
   id:"credentials",
   name:"Credentials",
   credentials: {
    email: {label:"Email", type: "text"},
    password: {label: "password", type:"password"}
   },
   async authorize(credentials) {
    await connectToMongoDB().catch(err => {throw new Error(err)})

    const user = await User.findOne({
     email:credentials?.email
    }).select("+password")

    if(!user) {
     throw new Error("Invalid credentials")
    }

    const isPasswordCorrect = await compare(credentials!.password, user.password)
    if(!isPasswordCorrect){
     throw new Error("wrong mail or password. invalid credentials")
    }

    return user
   }
  })
 ],
 pages: {
  signIn: "/login"
 },
 session: {
  strategy: "jwt"
 },
 callbacks: {
  jwt: async ({token,user}) => {
   user && (token.user = user)
   return token
  },
  session: async({session,token}) => {
   const user = token.user as IUser
   session.user = user
   return session
  }
 }
}

export default NextAuth(options)
