import React from 'react'
import { FaKey } from "react-icons/fa";


export default function Home() {
  return (
    <div className='text-white  flex my-1 font-fomofont flex-col items-center '>
       <p className='text-[2rem] font-semibold'>someone else is</p>
        <h1 className='text-[2.5rem] font-semibold'>EXIT SCAMMING</h1>    
        <span className='text-lg'>loading...</span>
        <div className="w-[98%] ">
          <div className="flex items-center justify-center rounded-2xl bg-fomopink m-2 py-2  " style={{boxShadow:'0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f'}}><FaKey className='text-2xl'/> <p className='ml-2 text-2xl'>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</p></div>
        </div>
    </div>
  )
}
