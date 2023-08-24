
'use client'
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import add from 'date-fns/add';
import format from 'date-fns/format';

const Calender = () => {
    const [selectDate, setSelectDate] = useState(null)
    const [selectTime, SetSelectTime]= useState(null)
    console.log(selectDate);
    console.log(selectTime);
    useEffect(()=>{
        if(selectDate != null ){
            getTime()
        }
    },[])

    const getTime = ()=>{

        const begining = add(selectDate, {hours: 10})
        const end = add(selectDate, {hours: 17})
        const interval = 60

        const times =[]
        for (let index = begining; index <=end; index= add(index,{minutes: interval})) {
            times.push(index)
            
        }
        return times;
    }
    const times = getTime()
  return (
    <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center'>
            <Calendar minDate={new Date()}
      
      className="react-calendar"
      view='month'
      onClickDay={(date)=>setSelectDate(date)}
      /></div>
        {selectDate?(
        <div className='flex w-[5rem] flex-col gap-4'>
            {times?.map((time, i) => (
            <div className='rounded-sm bg-gray-100 p-2' key={`time-${i}`}>
              <button onClick={() => SetSelectTime((prev) => ({ ...prev, time }))} type='button'>
                {format(time, 'kk:mm')}
              </button>
            </div>
          ))}
        </div>):null}
      
    </div>
  )
}

export default Calender
