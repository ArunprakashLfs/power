'use client'
import { DummyData } from "@/components/DummyData"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

export default function Home() {
  const router = useRouter()
  const handleSubmit = (val)=>{
    console.log(val);
    // router.push('/'+val.firstName)
  }
  return (
    <div className="flex items-center justify-center gap-2">
      {DummyData.map((val,i)=>{
        return(
          <div className="flex flex-col items-center gap-2 w-[280px] h-[400px] rounded-lg shadow-lg">
            <div>
              <Image src={val.image} alt={val.lastName} width={78} height={78}/>
            </div>
            <h1>{val.firstName}</h1>
            <div>
              <button onClick={(i)=>handleSubmit(i)} className="bg-blue-600 text-xl font-bold p-2 rounded-lg text-white">Book Appoinment</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
