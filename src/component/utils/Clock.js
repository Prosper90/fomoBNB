import React, { useEffect, useState } from 'react';

export default function Clock(props) {


  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();


  let interval;

    
  const startTimer = (date) => {
    console.log(date * 1000);
    //const countDownDate = new Date(date).getTime();
    //console.log(countDownDate);

    interval = setInterval(() => {
      const now = new Date().getTime();


      const distance = date * 1000 - now;
      //console.log(distance);


      const hours = Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
      const minutes = Math.floor(distance % (60*60*1000)/(1000*60));
      const seconds = Math.floor(distance % (60*1000)/(1000));


      if(distance < 0 ) {
        //clear timer
        //show message
        //props.setCallAgain(!props.callAgain);
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        //let arrreturn = [days, hours, minutes, seconds];
        //console.log(arrreturn);`
       // return [days, hours, minutes, seconds];

      }

    })
  }


  useEffect(() => {

    const nintyMinutesLater = new Date();
    nintyMinutesLater.setMinutes(nintyMinutesLater.getMinutes() + 1);

 

   if(props.signerAddress) {
    if(props.time !== undefined) {
      startTimer(props.time);
      console.log(props.time, "gotten");
    }

  }


  }, [props.time])





  return (

    <div className=" flex justify-center w-1/2">
    <div className="flex ml-2">
    <h4 className='text-[2.5rem] sm:text-[1.75rem]  font-[500]'>
        <span id="hours" />
        {timerHours}
    </h4>
    <div className="text-[2.5rem] sm:text-[1.75rem]  font-[500]">:</div>
    <h4 className='text-[2.5rem] sm:text-[1.75rem]  font-[500]'>
        <span id="minutes" />
        {timerMinutes}
    </h4>
    <div className="text-[2.5rem] sm:text-[1.75rem]  font-[500]">:</div>
    <h4 className='text-[2.5rem] sm:text-[1.75rem]  font-[500]'>
        <span id="seconds" />
        {timerSeconds}
    </h4>
    </div>
    </div>
  )


}


Clock.defaultProps = {
  timerMinutes:10,
  timerSeconds:10
}
