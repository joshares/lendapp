import { HiEllipsisVertical } from 'react-icons/hi2'
import { BsEye } from 'react-icons/bs'
import { FiUserX, FiUserCheck } from 'react-icons/fi'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import { userProp } from 'component/pages/users'
import { useUserContext } from 'component/context/context'

type UserProp = {
  user:any
}
const url:string = 'https:6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'

export default function Users({user}:UserProp) {
  const { fetchSingleUser } = useUserContext()

  const {createdAt,email,userName,phoneNumber,orgName, id} = user


  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => {
    setActive(false)
  }

  useEffect(() => {
    fetchSingleUser(`url${id}`)
  },[id])

  return (
    <main>
     <div key={id} className="flex justify-between hover:bg-gray-200 "
     onClick={() => setActive(!active)}
     >
      <p className="md:w-1/6 text-xs">lendsqr</p>
      <div className="md:w-1/6 w-1/6 text-xs">
        <p className="md:w-full">{userName}</p>
      </div>
      <p className="md:w-1/4 hidden md:block text-xs">{email}</p>
      <p className="md:w-1/6  text-xs">{phoneNumber.slice(0,12)}</p>
      <p className="w-1/6 hidden md:block text-xs">May 15th, 2020</p>
      <div className='flex '>
        <p className="  bg-red-300 rounded-md text-center px-1 text-xs">inactive</p>
      <HiEllipsisVertical className='text-xl ' onClick={() => {
        handleClick()
        setActive(!active)
      }}/>
      </div>
     </div>
     {active && (
      <div className='p-2 bg-white text-sm shadow-lg w-max absolute right-4'>
      <Link href={`/users/${id}`} className='flex gap-1 items-center' onClick={() => setActive(!active)}>
        <BsEye className=''/>
        <p className='text-sm'>View Details</p>
      </Link>
      <button className='flex gap-1 items-center'  onClick={() => setActive(!active)}>
        <FiUserX className=''/>
        <p>Blacklist user</p>
      </button>
      <button className='flex gap-1 items-center'  onClick={() => setActive(!active)}>
        <FiUserCheck className=''/>
        <p>Activate user</p>
      </button>
     </div>
     )}
    </main>
  )
}
