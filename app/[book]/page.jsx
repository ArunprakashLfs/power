import React from 'react'
import { useEffect } from 'react'
import Calender from "@/components/Calender/Calender"

const Book = ({params}) => {
  useEffect(()=>{
    console.log(params);
  },[params])
  return (
    <div>
      <Calender params={params}/>
    </div>
  )
}

export default Book
