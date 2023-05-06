import mongoose from "mongoose";

const { MONGODB_URL } = process.env

if (!MONGODB_URL){
  console.log("check env")
 throw new Error("Invalid environment variable: MONGODB_URL")
}

export const connectToMongoDB = async () => {
 try {
  const { connection } = await mongoose.connect(MONGODB_URL)
    if(connection.readyState === 1) {
     return Promise.resolve(true)
    }
 }catch(err){
  return Promise.reject(err)
 }
}