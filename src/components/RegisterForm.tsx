import React, { useState } from "react";
import Link from "next/link";
import { signIn} from "next-auth/react";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";

export interface InputErros {
    [key: string]: string;
}

export default function Register() {
 const [load, setLoad] = useState(false)
 const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
 const [submitError, setSubmitError] = useState<string>("");
 const [showPassword, setShowPassword] = useState(false)
 const toggleShowPassword = () => {
  setShowPassword(!showPassword)
 }
 const [validationErrors, setValidationErrors] = useState<InputErros[]>([])
 const router = useRouter();
 
 const validateData = (): boolean => {
        const err = []

        if (data.fullName?.length < 4) {
            err.push({ fullName: "Full name must be atleast 4 characters long" })
        }
        else if (data.fullName?.length > 30) {
            err.push({ fullName: "Full name should be less than 30 characters" })
        }
        else if (data.password?.length < 6) {
            err.push({ password: "Password should be atleast 6 characters long" })
        }
        else if (data.password !== data.confirmPassword) {
            err.push({ confirmPassword: "Passwords don't match" })
        }

        setValidationErrors(err)
        console.log(validationErrors)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoad(true)
   const isvalid = validateData()
   if(isvalid) {
     const options = {
       method:"POST",
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(data)
      }
      
  await fetch("api/auth/signup", options)
  .then((res) => res.json())
  .then((data) => {
    if(data.error){
      setSubmitError(data.error);
    }  
  if(data.success){
    router.push("/login")};
  })
  setLoad(false)
   }
 }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

 
 
  return (
    <form className="grid gap-3 w-full">
      <div
         className='border border-transparent border-b-gray-500'
      >
        <input
          type="text"
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          name="fullName"
          onChange={handleInputChange}
          placeholder="Name"
        />
      </div>
      <div
        className='border border-transparent border-b-gray-500'
      >
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Email"
        />
      </div>
      <div
        className='border border-transparent border-b-gray-500 relative'
        onClick={toggleShowPassword}
      >
        <input
          type={showPassword ? "password" : "text"}
          name="password"
          onChange={handleInputChange}
          className="w-full py-1.5 pl-3 placeholder:font-thin outline-none"
          placeholder="Password"
        />
        <div
          className="absolute top-3 right-2 text-gray-400 cursor-pointer"
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </div>
        </div>
        <div
        className='border border-transparent border-b-gray-500 relative'
      >
        <input
          type={showPassword ? "password" : "text"}
          name="confirmPassword"
          onChange={handleInputChange}
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Confirm Password"
        />
        <div
          className="absolute top-3 right-2 text-gray-400 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? <BiHide /> : <BiShow />}
        </div>
      </div>
      {submitError.length > 2 && (
        <p className="text-red-500 text-center text-sm">{submitError}.check details or try to login if user exist</p>
      )}
      <div className="w-full mx-auto my-8">
        <button
          type="submit"
          onClick={handleSubmit}
          className="py-2  text-lg font-medium bg-purpleLura text-white rounded-md bg-[#39CDCC] w-full"
        >
         { load ? (
          <p>loading...</p>
         ): (
          <p>sign up</p>
         )}
        </button>
        {/* {submitError && (
          <span className="text-rose-500 text-xs font-medium text-center">
            {submitError} */}
          {/* </span> */}
        {/* )} */}
        <p className="text-center mt-5 my-2 uppercase font-bold text-2xl">
          or
        </p>
      </div>
    </form>
  )
}
