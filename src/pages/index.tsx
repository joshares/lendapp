import { useEffect } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'



export default function Home() {
  const router = useRouter()
  useEffect(() => {
  const securePage = async() => {
   const session = await getSession()
   if(!session){
    router.push('/login')
   } 
  }
  securePage();
 })
  return (
    <main className='p-3 bg-gray-100 flex justify-end text-lg'>
     <article className='md:w-3/4 w-full pt-20 h-screen'>
      <div className='flex justify-center items-center'>
        <Link className='text-enter bg-[#39CDCC]  p-8' href="/users">see users</Link>
      </div>
     </article>
    </main>
  )
}
