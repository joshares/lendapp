import { useUserContext } from "component/context/context"


export default function PersonalInfo() {

  const { state } = useUserContext()
  const {single_user} = state
  const {profile,phoneNumber,email,accountNumber,education,guarantor} = single_user

  const firstname = profile?.firstName
  const lastname = profile?.lastName
  const address = profile?.address
  const status = education?.employmentStatus
  const sector = education?.sector
  const level = education?.level
  const duration = education?.duration
  const officeEmail = education?.officeEmail
  const income = education?.monthlyIncome[0]
  const loan = education?.loanRepayment
  const gfirstname = guarantor?.firstName
  const glastname = guarantor?.lastName
  const gnumber = guarantor?.phoneNumber


  return (
   <main className="p-2 bg-white shadow-lg my-3">
   <section className=" pb-3 border-b-2 border-gray-300">
     <h1 className="my-3 font-semibold">Personal Information</h1>
     <article className="grid md:grid-cols-4 gap-4  grid-cols-2">
      <div className="flex flex-col  gap-1">
       <p className="uppercase text-sm text-gray-400">Full name</p>
       <p className="font-semibold">{firstname} {lastname}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">Phone </p>
       <p className="font-semibold">{phoneNumber?.slice(0,13)}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">email address</p>
       <p className="font-semibold">{email?.slice(5,)}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">bvn</p>
       <p className="font-semibold">{accountNumber}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">marital status</p>
       <p className="font-semibold">single</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">children</p>
       <p className="font-semibold">none</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400" >Type of residence</p>
       <p className="font-semibold">{address}</p>
      </div>
     </article> 
    </section>
   <section className=" pb-3 border-b-2 border-gray-300">
     <h1 className="my-3 font-semibold">Education and Employment</h1>
     <article className="grid md:grid-cols-4 gap-4 grid-cols-2">
      <div className="flex flex-col  gap-1">
       <p className="uppercase text-sm text-gray-400">level of Education</p>
        <p className="font-semibold">{level}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">employment status</p>
       <p className="font-semibold">{status}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">sector of employment</p>
       <p className="font-semibold">{sector}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">duration of employment</p>
       <p className="font-semibold">{duration}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">office email</p>
       <p className="font-semibold">{officeEmail}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">monthly income</p>
       <p className="font-semibold">NGN {income}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400" >loan Repayment</p>
       <p className="font-semibold">NGN {loan}</p>
      </div>
     </article> 
    </section>
   <section className=" pb-3 border-b-2 border-gray-300">
     <h1 className="my-3 font-semibold">Socials</h1>
     <article className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col  gap-1">
       <p className="uppercase text-sm text-gray-400">Twitter</p>
       <p className="font-semibold">@{firstname}_{lastname}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">Facebook</p>
       <p className="font-semibold">{firstname}{lastname}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">Instagram</p>
       <p className="font-semibold">@{firstname}_{lastname}</p>
      </div>
     </article> 
    </section>
    <section className=" pb-3">
     <h1 className="my-3 font-semibold">Guarantor</h1>
     <article className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col  gap-1">
       <p className="uppercase text-sm text-gray-400">Full name</p>
       <p className="font-semibold">{gfirstname} {glastname}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">phone number</p>
       <p className="font-semibold">{gnumber?.slice(0,13)}</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">Email address</p>
       <p className="font-semibold">{gfirstname}@gmail.com</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">relationship</p>
       <p className="font-semibold">friend</p>
      </div>
     </article> 
     </section>
    {/* 
    <section className=" pb-3 border-b-2 border-gray-300">
     <h1 className="my-3 font-semibold">Education and Employment</h1>
     <article className="grid grid-cols-4 gap-4">
      <div className="flex flex-col  gap-1">
       <p className="uppercase text-sm text-gray-400">level of Education</p>
       <p className="font-semibold">B.Sc</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">employment status</p>
       <p className="font-semibold">Employed</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">sector of employment</p>
       <p className="font-semibold">fintech</p>
      </div>
      <div className="flex flex-col gap-1">
       <p className="uppercase text-sm text-gray-400">duration of employment</p>
       <p className="font-semibold">2 years</p>
      </div>

     </article> 
    </section> */}
   </main>
  )
}
