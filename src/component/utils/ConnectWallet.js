import React from 'react'

export default function ConnectWallet({ setModalWallet }) {
    return (
        <div className="fixed top-0 left-0 bg-[#000000a6] right-0 h-screen z-50  px-4 sm:px-2 w-full overflow-x-hidden overflow-y-auto md:inset-0 md:h-full justify-center items-center flex"  style={{  transition: 'top 3s'}}>
            <div className="relative w-2/3 font-fomofont h-full mt-24 sm: sm:mt-64 sm:w-full p-6 sm:p-1"  style={{  transition: 'margin-top .5s'}}>
                <div className="relative bg-[#212529] p-6 sm:p-3 rounded-3xl shadow">
                    <div className="flex mb-10  justify-between">
                        <h1 className='text-white text-xl' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }}>Connect your wallet</h1>
                        <button onClick={() => setModalWallet(false)} type="button" className="inline-flex items-center px-3 py-0 ml-auto text-sm bg-transparent rounded-lg text-neutral cursor-pointer"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRrule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-col pb-4 px-44 sm:px-10">
                        <button className='w-full py-3 mb-14 sm:mb-8 text-white rounded-md text-base hover:border hover:bg-transparent hover:border-[#f000f0] bg-fomopink'>MataMask</button>
                        <button className='w-full py-3 text-white rounded-md text-base hover:border hover:bg-transparent hover:border-[#f000f0] bg-fomopink'>WalletConnnect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
