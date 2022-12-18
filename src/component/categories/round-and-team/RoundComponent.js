import React from 'react'
import { FaKey } from 'react-icons/fa'

export default function RoundComponent() {
    return (
            <div className="bg-[#212529] font-fomofont w-[48vw] sm:w-[94vw]  p-5 rounded-b-2xl rounded-r-2xl">
                <div>Round #0</div>
                <h3 className="sm:text-[1.3rem] text-3xl font-fomofont font-medium my-2 s">Contract will drain in</h3>
                <span className="text-xl font-medium font-fomofont">loading...</span>
                <div className="relative bg-black h-1  my-2 w-[46vw] sm:w-[85vw] sm:mb-4 mx- rounded-2xl">
                    <div className="abosulte bg-[#f000f0] w-[45vw] sm:w-[70vw]  h-1 rounded-2xl"></div>
                </div>

                <div className="bg-[#181c1d] p-4 font-fomofont rounded-md">
                    <div className="flex justify-between ">
                        <h3 className="sm:text-[1.3rem] text-2xl">Active Pot</h3>
                        <span className="text-xl">loading...</span>
                    </div>
                    <div className="flex justify-between my-4">
                        <h3 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">Your Keys</h3>
                        <div className="flex flex-col justify-between items-center">
                            <span className="font-light text-base">0 USD</span>
                            <h2 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">0.00 <FaKey className="ml-2 text-3xl" /></h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont" >Your Earnings</h3>
                        <div className="flex flex-col justify-between items-center">
                            <span className="font-light">Total 0 Keys</span>
                            <h2 className="flex items-center text-3xl sm:text-[1.3rem] font-fomofont">0.0000  <img src="/images/bnbiconhq.png" className="h-8 ml-2" alt="" /></h2>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <span className="font-fomofont font-light mt-1">0 USD</span>
                    </div>
                </div>
            </div>
    )
}
