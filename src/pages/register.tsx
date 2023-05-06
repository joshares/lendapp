import Image from 'next/image'
import Loginpng from '../../public/Login.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link"
import Register from 'component/components/RegisterForm';
import { signIn } from "next-auth/react";


export default function RegisterPage() {

   const handleClick = async(e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    signIn('github',{callbackUrl: "http://localhost:3000/users" })
  }
  const handleGoggle = async(e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    signIn('google',{callbackUrl: "http://localhost:3000/users" })
  }
  return (
    <main className='p-20 flex flex-col justify-between md:flex-row'>
      <section>
       <Image src={Loginpng} alt="img" className='' />
      </section>
      <section >
       <div>
          <h1 className="text-2xl mb-10">Sign up!</h1>
           <Register/>
          <div className="flex justify-between mt-4">
           
            {/* <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaFacebook className="text-black sm:text-xs text-2xl" />
              <button
                type="button"
                className="text-xs font-semibold "
              >
                sign with Facebook
              </button>
            </div> */}
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FcGoogle className="sm:text-xs text-2xl" />
              <button
                onClick={handleGoggle}
                type="button"
                className="text-xs font-semibold "
              >
                Sign up with Google
              </button>
            </div>
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaGithub className="text-black sm:text-xs text-2xl" />
              <button
               onClick={handleClick}
                type="button"
                className="text-xs font-semibold "
              >
                Continue with Github
              </button>
            </div>
          </div>
        </div>
        <p className="text-center py-5 text-xs mt-2">
          Already have an account?{" "}
          <Link href={"/login"} className="text-purpleLura">
            login
          </Link>
        </p>
      </section>
       
    </main>
  )
}
