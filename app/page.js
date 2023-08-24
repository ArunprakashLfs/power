'use client'
// import { DummyData } from "@/components/DummyData"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase"

export default function Home() {
  const [Data, setData] = useState([])

  const router = useRouter()

  useEffect(()=>{
    getData()
  },[])
  const getData = async()=>{
    setData([])
    const querySnapshot = await getDocs(collection(db, "Hr"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let data = doc.data()
  data.id = doc.id
  setData((val)=>[...val, data])
});
  }
  const handleSubmit = (val)=>{
    console.log(val);
    router.push('/'+ val)
  }
  return (
    <div className="flex items-center justify-center gap-2">
      {Data.map((val,i)=>{
        return(
          <div className="flex flex-col items-center gap-2 w-[280px] h-[400px] rounded-lg shadow-lg">
            <div>
              <Image src={val.image} alt={val.lastName} width={78} height={78}/>
            </div>
            <h1>{val.firstName}</h1>
            <div>
              <button onClick={()=>handleSubmit(val.id)} className="bg-blue-600 text-xl font-bold p-2 rounded-lg text-white">Book Appoinment</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
