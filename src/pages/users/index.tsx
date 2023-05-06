import Users from 'component/components/Users'
import {BiMenuAltLeft} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {TbCoins} from 'react-icons/tb'
import {BsCashCoin} from 'react-icons/bs'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
import Filter from 'component/components/Filter'
import {useState,useEffect} from 'react'
import { useUserContext } from 'component/context/context'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'

export type userProp = {
  createdAt:string
  email:string
  userName:string
  phoneNumber:string
  orgName:string
}




export default function User() {
  
  const router = useRouter()
  const [load, setLoad] = useState(true)
  const { state } = useUserContext()
  const {loading,filter_users,error} = state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage:number = 10
  const totalPages = Math.ceil(filter_users.length / itemsPerPage);

  function handlePageClick(page:number) {
    if(currentPage === (totalPages + 1)){
      setCurrentPage(1);
    }else if(currentPage === 0){
      setCurrentPage(10)
    }else{
      setCurrentPage(page);
    }
  }

  const handleNext = (page:number) => {
    if(currentPage === 10){
      setCurrentPage(1);
    }else{
      setCurrentPage(page + 1)
    }
  }
  const handlePrev = (page:number) => {
    if(currentPage === 1){
      setCurrentPage(10);
    }else{
      setCurrentPage(page - 1)
    }
  }
  useEffect(() => {
  const securePage = async() => {
   const session = await getSession()
   if(!session){
    router.push('/login')
   } else {
    setLoad(false)
   }
  }
  securePage();
 },[router])

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUsers = filter_users.slice(startIndex, endIndex);
  
  if(loading){
    return (
      <div className="  flex justify-center items-center">
        <p className="text-[#213f7d] text-xl p-5">loading...</p>
      </div>
    )
  }
  if(error){
    return (
      <div className="  flex justify-center items-center">
        <p className="text-[#213f7d] text-xl p-5"><span className='text-red-500'>Error loading,</span>check connection and reload page...</p>
      </div>
    )
  }

  return (
    <main className='p-3 bg-gray-100 flex justify-end text-sm'>
     <article className='md:w-3/4 w-full'>
      <header className='my-10 md:justify-start flex justify-center'>
      <h1 className='text-2xl'>USER</h1>
     </header>
     <section className='flex md:justify-between gap-5 md:flex-row flex-col justify-center items-center  uppercase'>
      <div className='flex items-center bg-white gap-5 flex-col border shadow-xl justify-center w-2/3  md:w-1/4 text-xl py-4 rounded-md'>
       <FiUsers className='text-[#DF18FF] bg-red-100 rounded-full p-1 text-2xl'/>
       <p className='text-sm'>Users</p>
       <p>2,222</p>
      </div>
      <div className='flex items-center bg-white gap-5 flex-col border shadow-xl justify-center py-4 w-2/3  md:w-1/4 text-xl '>
       <FiUsers className='text-[#5718FF] bg-yellow-100 rounded-full p-1 text-2xl'/>
       <p className='text-sm'>activer Users</p>
       <p>2,222</p>
      </div>
      <div className='flex items-center bg-white gap-5 flex-col border shadow-xl justify-center py-4 w-2/3  md:w-1/4 text-xl'>
       <BsCashCoin className='text-[#F55F44] bg-orange-100 rounded-full p-1 text-2xl'/>
       <p className='text-sm'>Users with sasings</p>
       <p>2,222</p>
      </div>
      <div className='flex items-center bg-white gap-5 flex-col border shadow-xl justify-center py-4 w-2/3  md:w-1/4 text-xl'>
       <TbCoins className='text-[#FF3366] bg-red-200 rounded-full p-1 text-2xl'/>
       <p className='text-sm'>Users with loans</p>
       <p>2,222</p>
      </div>
     </section>
     <section className='bg-white mt-10 p-1'>
      <header className='flex  justify-between'>
       <div className='flex items-center gap-1 md:w-1/12 md:mr-9'>
        <h1 className='uppercase text-sm hidden md:block'>Organisation</h1>
        <h1 className='md:hidden block'>ORG...</h1>
        <BiMenuAltLeft/>
       </div>
       <div className='flex items-center gap-1 md:w-1/6 w-1/6'>
        <h1 className='uppercase text-sm'>Username</h1>
        <BiMenuAltLeft/>
       
       </div>
       <div className='md:flex items-center gap-1   hidden'>
        <h1 className='uppercase text-sm'>Email</h1>
        <BiMenuAltLeft/>
       </div>
       <div className='flex items-center gap-1 md:w-1/4 md:justify-end '>
        <h1 className='uppercase text-sm md:block hidden'>Phone number</h1>
        <h1 className='uppercase text-sm md:hidden block'> number</h1>
        <BiMenuAltLeft/>
       </div>
       <div className='md:flex hidden items-center gap-1 md:justify-end md:-mr-10 '>
        <h1 className='uppercase text-sm '>date joined</h1>
        <BiMenuAltLeft/>
       </div>
       <div className='flex items-center gap-1 md:w-1/6  justify-end '>
        <h1 className='uppercase text-sm '>status</h1>
        <BiMenuAltLeft className=''/>
       </div>
      </header>
      <div className='mt-5 flex flex-col gap-2'>
        {currentUsers.map((user,id) => {
        return (
          <Users key={id} user={user} />
        )
      })} 
      </div>
     </section>
     <section className='flex items-center gap-2 justify-end my-5 text-sm md:text-lg'>
       <MdKeyboardArrowLeft className='text-[#213F7D] bg-purple-200'  onClick={() => handlePrev(currentPage)}/>
      {
        currentPage < 8 ? 
        (
          <div className='flex gap-2'>
            <button className='text-[#0e2451]'
             onClick={() => handlePageClick(currentPage)}>{currentPage}</button>
            <button className='text-[#545F7D]'
             onClick={() => handlePageClick(currentPage + 1)} >{currentPage + 1}</button>
            <button className='text-[#545F7D]'
            onClick={() => handlePageClick(currentPage + 2)}>{currentPage + 2}<span>...</span></button>
          </div>
        ) : (
          <div className='flex gap-2'>
            <button className={`${currentPage === (totalPages - 2) ? "text-[#0e2451]" :  "text-[#545F7D]"}`} onClick={() => handlePageClick(totalPages - 2)}>{totalPages - 2}</button>
            <button className={`${currentPage === (totalPages - 1) ? "text-[#0e2451]" :  "text-[#545F7D]"}`} onClick={() => handlePageClick(totalPages - 1)} >{totalPages - 1}</button>
            <button className={`${currentPage === (totalPages) ? "text-[#0e2451]" :  "text-[#545F7D] "}`} onClick={() => handlePageClick(totalPages)}>{totalPages}<span>.</span></button>
          </div>
        )
      }
      <div>
        {currentPage < (totalPages - 3) &&
        (
          <div className='flex gap-2'>
         <button className='text-[#545F7D]'
          onClick={() => handlePageClick(totalPages -1)}>{totalPages -1}</button>
         <button className='text-[#545F7D]'
         onClick={() => handlePageClick(totalPages)}>{totalPages}</button>
          </div>
        )
        }
      </div>
      <MdKeyboardArrowRight className='text-[#213F7D] bg-purple-200' onClick={() => handleNext(currentPage)}/>
     </section>
     </article>
    </main>
  )
}
