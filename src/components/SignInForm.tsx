import React, { useState } from "react";
import Link from "next/link";
import { signIn} from "next-auth/react";
import { useRouter } from "next/router";
import { BiHide, BiShow } from "react-icons/bi";


export default function SignupForm() {
 const [showPassword, setShowPassword] = useState(false)
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [submitError, setSubmitError] = useState("")
 const [load, setload] = useState(false)
 const router = useRouter()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

     const handleLogin = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setload(true)
        try {
          
          console.log(email,password)
          const loginRes = await signIn("credentials",{
            redirect:false,
            email:email,
            password:password
          })          
          setload(false)
            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "")
            }
            else {
                router.push("/users")
            }
        } catch (error) {
            setload(false)
            console.log(error)
        }
    }


  return (
    <form className="grid gap-3 w-full">
      <div
        className='border border-transparent border-b-gray-500'
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full py-1.5 pl-3 placeholder:font-thin"
          placeholder="Email"
        />
      </div>
      <div
        className='border border-transparent border-b-gray-500 relative'
      >
        <input
          type={`${showPassword ? 'text' : "password"}`}
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full py-1.5 pl-3 placeholder:font-thin outline-none"
          placeholder="Password"
        />
        <div
          className="absolute top-3 right-2 text-black cursor-pointer w-max"
          onClick={ () =>setShowPassword(!showPassword)}
        >
          {showPassword ? <BiHide  /> : <BiShow />}
        </div>
      </div>
      <div className="flex justify-between text-xs">
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <label className="text-black">Remember me</label>
        </div>
        <p className="text-black">Forgot Password?</p>
      </div>
      {submitError.length > 2 && (
        <p className="text-red-500 text-center text-sm">{submitError}. check login details or try to signup</p>
      )}
      <div className="w-full mx-auto my-8">
        <button
          type="submit"
          onClick={handleLogin}
          className="py-2  text-lg font-medium bg-purpleLura text-white rounded-md bg-[#39CDCC] w-full"
        >
         { load ? (
          <p>loading...</p>
         ): (
          <p>Log in</p>
         )}
        </button>
        {/* {submitError && (
          <span className="text-rose-500 text-xs font-medium text-center">
            {submitError} */}
          {/* </span> */}
        {/* )} */}
        <p className="text-center mt-5 my-2 uppercase font-bold text-2xl text-black">
          or
        </p>
      </div>
    </form>
  )
}
