import union from '../../public/Union.png'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import { useSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { Session } from 'next-auth'


export default function Navbar() {
    const { data:session, status:loading} = useSession()
    
    const firstName = (session:Session | null) => {
      if(session){
        const {fullName}:any = session.user
        const {name}:any = session.user
        if (fullName){
          const split = fullName.split(" ")
         return split[0]
        }else if(name){
          const split = name.split(" ")
          return split[0]
        }
      }else {
        return 'user'
      }
    }

    

  return (
    <main className='font-sans bg-white p-4 shadow-xl block text-black'>
     <section className='flex  justify-between items-center md:flex-row flex-col gap-2'>
     <div className='flex justify-between w-full md:w-3/5 '>
      <div className='flex items-center gap-2'>
      <Image src={union} alt='img' />
      <p className='text-2xl font-bold text-[#213F7D]    '>Lender</p>
      </div>
      <form className='w-max flex items-center'>
       <input type='text' placeholder='search for anything'  className='md:w-72 outline-none border border-slate-300 rounded-l-md p-1 '/>
       <button className='bg-[#39CDCC] items-center p-2 rounded-r-md'>
        <AiOutlineSearch className='text-lg text-white'/>
       </button>
      </form>
     </div>
      <div className='flex gap-3 md:items-center justify-end md:w-max w-full items-center'>
       <p>welcome {firstName(session)}</p>
       {!session && loading === 'unauthenticated' && (
        <Link href='/login' className='bg-[#39CDCC] px-2 p-1 rounded-md'>Login</Link>
       )}
       {session && (
        <Link href='/api/auth/signout' className='bg-[#39CDCC] px-2 p-1 rounded-md'><p onClick={() => signOut()}>logout</p></Link>
       )}
      </div>
     </section>
     <section></section>
    </main>
  )
}
