import Link from "next/link"
import {HiArrowLongLeft} from 'react-icons/hi2'
import {AiOutlineStar, AiOutlineUser} from 'react-icons/ai'
import { useRouter } from "next/router"
import PersonalInfo from "component/components/PersonalInfo"
import { useEffect } from "react"
import { useUserContext } from "component/context/context"





export default function UserSInglePage() {
  const { fetchSingleUser, state } = useUserContext()

  const router = useRouter();
  const { users:id } = router.query;

  useEffect(() => {
    fetchSingleUser(`https:6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
  },[id])

  const { single_loading:loading , single_user, single_error:error} = state
  console.log(single_user)

  const {accountBalance,userName,profile,accountNumber,} = single_user

  const lastname = profile?.lastName
  
  if(loading){
    return (
      <div className="  flex justify-center items-center">
        <p className="text-[#213f7d] text-xl p-5">loading...</p>
      </div>
    )
  }
  if(error){
    return (
      <div className="  flex flex-col justify-center items-center py-5">
        <Link href='/users' className="flex items-center gap-2 text-sm">
        <HiArrowLongLeft/>
        <p className="font-thin" >Back to users</p>
      </Link>
        <p className="text-[#213f7d] text-xl p-5"><span className='text-red-500'>Error loading,</span>check connection and reload page...</p>
      </div>
    )
  }


  return (
    <main className='p-3 bg-gray-50 flex justify-end text-[#213F7D]'>
     <article className='md:w-3/4 w-full'>
      <header>
      <Link href='/users' className="flex items-center gap-2 text-sm">
      <HiArrowLongLeft/>
      <p className="font-thin" >Back to users</p>
      </Link>
      <p className="my-5 font-bold">User Details</p>
      </header>
      <section className="bg-white p-2 shadow-lg">
        <article className="flex gap-10 items-center ">
          <div className="flex items-center gap-2">
            <AiOutlineUser className="rounded-full bg-gray-200 p-8 text-8xl"/>
            <div className="flex flex-col gap-2 ">
            <p className="font-bold">{profile?.firstName} {lastname}</p>
            <p className="text-sm">{userName}
            </p>          
            </div>
          </div>
        <div className="md:flex hidden flex-col gap-2 border-x-2 border-gray-300 px-2 ">
          <p className="font-bold">Users Tier</p>
          <div className="flex items-center">
            <AiOutlineStar className="text-yellow-600"/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">NGN {accountBalance}</p>
          <p className="text-sm">{accountNumber}/providus Bank</p>
        </div>
        </article>
        <p className="text-[#39CDCC] border-b-2 border-[#39CDCC] mt-5 w-max uppercase text-sm">
          General details
        </p>
      </section>
      <PersonalInfo/>
     </article>
     </main>
  )
}
