import Image from 'next/image'
import Loginpng from '../../public/Login.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link"
import SignInForm from 'component/components/SignInForm';
import { signIn } from "next-auth/react";


export default function Login() {

  const handleClick = async(e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    signIn('github',{ callbackUrl: "ttps://lendapp-weld.vercel.app" })
  }
  const handleGoggle = async(e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    signIn('google',{ callbackUrl: "ttps://lendapp-weld.vercel.app" })
  }
  return (
    <main className='md:p-20 p-12 flex flex-col justify-between md:flex-row text-black'>
      <section>
       <Image src={Loginpng} alt="img" className='' />
      </section>
      <section >
       <div>
          <h1 className="text-2xl mb-10 text-black">Welcome Back!</h1>
           <SignInForm/>
          <div className="flex justify-between mt-4">
            {/* <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaFacebook className="text-black sm:text-xs text-2xl" />
              <button
                onClick={handleTwitter}
                type="button"
                className="text-xs font-semibold "
              >
                Login with Facebook
              </button>
            </div> */}
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FcGoogle className="sm:text-xs text-2xl" />
              <button
                type="button"
                onClick={handleGoggle}
                className="text-xs font-semibold "
              >
                Sign in with Google
              </button>
            </div>
            <Link href='/api/auth/signup'
             className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer">
              <FaGithub className="text-black sm:text-xs text-2xl" />
              <button
                type="button"
                onClick={handleClick}
                className="text-xs font-semibold "
              >
                Continue with Github
              </button>
            </Link>
          </div>
        </div>
        <p className="text-center py-5 text-xs mt-2">
          Don`t have an account?{" "}
          <Link href={"/register"} className="text-purpleLura">
            Sign up
          </Link>
        </p>
      </section>
       
    </main>
  )
}
