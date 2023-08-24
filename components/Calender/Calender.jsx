"use client";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import add from "date-fns/add";
import format from "date-fns/format";

const Calender = ({params}) => {
  const [selectDate, setSelectDate] = useState(null);
  const [selectTime, SetSelectTime] = useState(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  console.log(selectDate);
  console.log(selectTime);
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  useEffect(()=>{
    console.log(params);
  },[params])
  useEffect(() => {
    if (selectDate != null) {
      getTime();
    }
  }, []);

  const getTime = () => {
    const begining = add(selectDate, { hours: 10 });
    const end = add(selectDate, { hours: 17 });
    const interval = 60;

    const times = [];
    for (
      let index = begining;
      index <= end;
      index = add(index, { minutes: interval })
    ) {
      times.push(index);
    }
    return times;
  };
  const times = getTime();
  const handleSubmit=()=>{
    console.log();
  }
  return (
    <div className="flex items-center justify-center">
      <form  className="flex flex-col items-center gap-4">
        <div>
          <label htmlFor="name" className="mb-2 italic">
            Name
          </label>
          <input
            className="mb-4 border-b-2"
            id="name"
            name="name"
            type="text"
            autocomplete="name"
            onChange={handleName}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 italic">
            Email
          </label>
          <input
            className="mb-4 border-b-2"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            onChange={handleEmail}
            required
          />
        </div>
        <div>
          <div className="flex gap-10">
            <div className="flex items-center justify-center">
              <Calendar
                minDate={new Date()}
                className="react-calendar"
                view="month"
                onClickDay={(date) => setSelectDate(date)}
              />
            </div>
            {selectDate ? (
              <div className="flex w-[5rem] flex-col gap-4">
                {times?.map((time, i) => (
                  <div className="rounded-sm bg-gray-100 p-2" key={`time-${i}`}>
                    <button
                      onClick={() =>
                        SetSelectTime((prev) => ({ ...prev, time }))
                      }
                      type="button"
                    >
                      {format(time, "kk:mm")}
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={()=>handleSubmit()}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calender;
