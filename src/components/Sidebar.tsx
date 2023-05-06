import {AiOutlineHome, AiOutlineProfile} from 'react-icons/ai'
import Link from 'next/link'


export default function Sidebar() {
  return (
    <main className='absolute   p-2 w-30 text-[#213F7D] bg-white text-base font-thin shadow-xl md:block hidden'>
     <div>
      <p>Switch Organisation</p>
      <div className='flex mt-5 items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Dashboard</p>
      </div>
     </div>
     <section className='mt-10 flex flex-col gap-3'>
      <p className='text-[#0d111d] uppercase text-sm'>customers</p>
      <Link href='/users' className='flex  items-center gap-2 bg-[#e6fafa]  border-l-2 border-l-[#39CDCC]'>
       <AiOutlineProfile className=' font-thin'/>
       <p>Users</p>
      </Link>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Guarantors <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>loans <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Decision Models <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Savings <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Loan Request <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Whitelist <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Karma <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
     </section>
     <section className='mt-10 flex flex-col gap-3'>
      <p className='uppercase text-sm text-[#545F7D]'>Settings</p>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Preferences <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Fees and Pricing <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Audit Logs <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
     </section>
     <section className='mt-10 flex flex-col gap-3'>
      <p className='uppercase text-sm text-[#545F7D]'>Settings</p>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Preferences <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Fees and Pricing <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
      <div className='flex  items-center gap-2'>
       <AiOutlineHome className='font-thin'/>
       <p>Audit Logs <span className='text-red-600 text-sm'>coming soon</span></p>
      </div>
     </section>

    </main>
  )
}
