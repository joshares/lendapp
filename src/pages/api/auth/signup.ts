import { NextApiRequest, NextApiResponse } from "next"
import { connectToMongoDB } from "../../../../lib/mongobd"
import User from "../../../../models/user"
import {hash} from "bcrypt"
import mongoose from "mongoose"

export type IUser = {
 _id: string
 email: string
 fullName:string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   await connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })

        const { fullName, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(409).json({ error: "User Already exists" })
        }
        else {
            if (password.length < 2){
                return res.status(409).json({ error: "Password should be 5 characters long" })}

            const hashedPassword = await hash(password, 12)

            User.create({
                fullName,
                email,
                password: hashedPassword
            }).then(( data:IUser) => {
                const user = {
                    email: data.email,
                    fullName: data.fullName,
                    _id: data._id
                }

                return res.status(201).json({
                    success: true,
                    user:data
                })
            }).catch((error) =>{
                if (error && error instanceof mongoose.Error.ValidationError) {
                    //mongo db will return array
                    // but we only want to show one error at a time

                    for (let field in error.errors) {
                        const msg = error.errors[field].message
                        return res.status(409).json({ error: msg })
                    }
                }
               console.log(error)
            })
            
        }
    }
    else {
        res.status(405).json({ error: "Method Not Allowed" })
    }
}

export default handler

// const handler = async (req:NextApiRequest, res:NextApiResponse) => {
//  console.log("connecting")
//  await connectToMongoDB().catch(err => res.json(err))

//  if(req.method === 'POST') {
//   const { fullName, email, password} = req.body
  
//   const userExists = await User.findOne({ email })

//   if(userExists){
//    return res.status(409).json({error: "user already exists"}) 
//   }else{
//    if(password.length < 6)
//      return res.status(409).json({error: "password should be 6 characters"})

//      const hashedPassword = await hash(password,12)

//      User.create({
//       fullName,
//       email,
//       password:hashedPassword
//      }, (error: unknown, data:IUser) => {
//         if(error && error instanceof mongoose.Error.ValidationError){

//          //mongo db will return array

//          for(let field in error.errors){
//           const msg = error.errors[field].message
//           return res.status(409).json({error: msg})
//          }
//         }
//         const user = {
//          email: data.email,
//          fullName: data.fullName,
//          _id: data._id
//         }
//         return res.status(201).json({
//          success: true,
//          user
//         })
//      })
//   }
//  }else {
//   res.status(405).json({error: "User Already exist"})
//  }

// }

// export default handler