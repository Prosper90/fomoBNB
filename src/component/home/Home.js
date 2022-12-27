import React from 'react'
import { FaKey } from "react-icons/fa";
import Clock from "../utils/Clock";


export default function Home(props) {
  return (
    <div className='text-white  flex my-1 font-fomofont flex-col items-center '>
       <p className='text-[2rem] sm:text-[1.525rem] font-[500]'>someone else is</p>
        <h1 className='text-[2.5rem] sm:text-[1.75rem]  font-[500]'>EXIT SCAMMING</h1>
        {props.signerAddress &&
         <h1 className='text-[2.5rem] sm:text-[1.75rem]  font-[500]'>{props.cbalance} BNB</h1>
        }
        {props.signerAddress ?
         <Clock time={props.timeleft} />
         :
         <span className='text-lg sm:text-[1.25rem]'>loading...</span>
        }
        <div className="w-[98%] ">
          <div className="flex items-center justify-center rounded-2xl sm:relative bg-fomopink m-2 py-2 sm:px-4 " style={{boxShadow:'0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f'}}>
          {props.signerAddress ?
              <>
                <FaKey className='text-2xl  sm:absolute left-2 top-3'/> 
                <p className='ml-2 sm:text-center  text-2xl sm:text-[1.25rem]'>Take control of the key</p>
              </>
            :
            <>
              <FaKey className='text-2xl  sm:absolute left-2 top-3'/> 
              <p className='ml-2 sm:text-center  text-2xl sm:text-[1.25rem]'>THE ONLY WAY YOU LOSE IN THIS GAME IS IF YOU STOP PLAYING</p>
            </>
          }
            </div>
        </div>
    </div>
  )
}
