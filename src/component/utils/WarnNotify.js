import React from 'react'

export default function WarnNotify(props) {
  return (
    <div className="text-[#FFF] h-[30px] absolute top-[10px] p-7 w-[100%] rounded-[5px]" style={{background: `#${props.warnType}`}}>
        <div className=" w-full h-full flex justify-center items-center font-fomofont">
          {props.warnMessage}
        </div>
    </div>
  )
}
