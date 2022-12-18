import React from 'react'

export default function RegisterName({ setModal }) {
    return (
        <div className="fixed top-0 left-0 bg-[#000000a6] duration-300 transition ease-in-out delay-300 right-0 h-screen z-50  px-4 w-full overflow-x-hidden overflow-y-auto md:inset-0 md:h-full justify-center items-center flex">
            <div className="relative w-2/3 font-fomofont h-full mt-24 sm: sm:mt-2 sm:w-full p-6 sm:p-3">
                <div className="relative bg-[#212529] p-6 rounded-lg shadow">
                    <div className="flex mb-10  justify-between">
                        <h1 className='text-white text-2xl'>Graffiti your name on the Blockchain</h1>
                        <button onClick={() => setModal(false)} type="button" className="inline-flex items-center px-3 py-0 ml-auto text-sm bg-transparent rounded-lg text-neutral cursor-pointer"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRrule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <form>
                        <input type="text" className='w-full text-[#222] outline-none py-2 px-4 rounded-md' placeholder='Kokichi Mikimoto' />
                        <p className="text-base text-white my-1 mt-6 font-light  font-fomofont">Names must follow these rules:</p>
                        <p className="text-base text-white my-1 font-light  font-fomofont">-Must be unique</p>
                        <p className="text-base text-white my-1 font-light  font-fomofont">-32 Characters or less</p>
                        <p className="text-base text-white my-1 font-light  font-fomofont">-A-Z(upper and lowercase)</p>
                        <p className="text-base text-white my-1 font-light  font-fomofont">-No special characters</p>
                        <p className="text-base text-white my-1 font-light  font-fomofont">-No more than one space between characters</p>
                        <p className="text-base text-white my-6 font-light  font-fomofont">If the transaction fails, one of these criteria was not met properly.</p>
                        <p className="text-base text-white mb-6 font-light  font-fomofont">Names are yours permanently(for vanity URLS). But only your most recent name will show up on the leaderboard/game UI. You can own as many names as you'd like.</p>
                        <button className="w-full flex items-center justify-center border hover:text-white hover:bg-[#f000f0] rounded-md py-2 border-[#f000f0] ">Purchase for 0.01 BNB</button>
                        <p className="text-base text-white my-1 font-light  font-fomofont">The fee is distributed across community members who made this game possible.</p>

                    </form>
                </div>
            </div>
        </div>
    )
}
