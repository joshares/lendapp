import {Schema, model, models} from "mongoose"

const UserSchema = new Schema({
 email: {
  type:String,
  unique: true,
  required: [true, "Email is required"]
 },
 fullName: {
  type:String,
  required:[true,"full name is required"],
  minLength: [4,"full name should be atleast 4 character long"],
  maxLength:[30,"full name should be atleast than 30"]
 },
 password: {
  type: String,
  required: [true, "password is required"],
  select: false
 }
})

const User = models.User || model("User",UserSchema)

export default User