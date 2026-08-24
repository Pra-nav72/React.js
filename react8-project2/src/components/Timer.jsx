import React, { useEffect, useState } from 'react'

const Timer = ({over}) => {
    const [timeLeft, setTimeLeft] = useState(10);
    const [displayTime, setDisplayTime] = useState();

    // for timer
    useEffect(()=>{
        let intervalId = setInterval(()=>{
            setTimeLeft( prev => {
                if(prev <= 0){
                    clearInterval(intervalId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return ()=> clearInterval(intervalId);

    }, []);

    // for formatting the time
    useEffect(()=>{
        if(timeLeft === 0){
            // coming from parent to, when true result will be displayed
            over(true)
        }
        const timeFormat = (`${(Math.floor(timeLeft / 60)).toString().padStart(2, 0)} : ${(timeLeft % 60).toString().padStart(2, 0)}`)

        setDisplayTime(timeFormat)
    }, [timeLeft])
  return (
    <div>
        time left  {displayTime}
    </div>
  ) 
}

export default Timer
