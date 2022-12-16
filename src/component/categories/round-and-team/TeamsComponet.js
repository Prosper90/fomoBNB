import React from 'react'

export default function TeamsComponet() {
    return (
        <div className="bg-[#212529] f grid grid-cols-2 font-fomofont w-[48vw] gap-6 p-5 rounded-b-2xl rounded-r-2xl">
            <div className="flex flex-col bg-[#181c1d] p-5 items-center justify-center rounded-md">
                <span className='font-light'>Whales</span>
                <img src="/images/tpwhaleglow.png" alt="whale" />
                <b className='font-normal' style={{ textShadow: ' gold 0px 0px 10px, gold 0px 0px 10px' }}>0 BNB</b>
            </div>
            <div className="flex flex-col bg-[#181c1d] p-5 items-center justify-center rounded-md">
                <span className='font-light'>Bears</span>
                <img src="/images/bear.png" alt="whale" />
                <b className='font-normal' style={{ textShadow: ' gold 0px 0px 10px, gold 0px 0px 10px' }}>0 BNB</b>
            </div>
            <div className="flex flex-col bg-[#181c1d] p-5 items-center justify-center rounded-md">
                <span className='font-light'>Bulls</span>
                <img src="/images/cow.png" alt="whale" />
                <b className='font-normal' style={{ textShadow: ' gold 0px 0px 10px, gold 0px 0px 10px' }}>0 BNB</b>
            </div>
            <div className="flex flex-col bg-[#181c1d] p-5 items-center justify-center rounded-md">
                <span className='font-light'>Sneks</span>
                <img src="/images/tpsnekglowdemo.png" alt="whale" />
                <b className='font-normal' style={{ textShadow: ' gold 0px 0px 10px, gold 0px 0px 10px' }}>0 BNB</b>
            </div>
        </div>
    )
}
