import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import ConnectWallet from '../utils/ConnectWallet';
import TutorialModal from '../utils/TutorialModal'

export default function NavBar() {
    const [modal, setModal] = useState(false);
    const [nav, setNav] = useState(false)
    const [modalWallet, setModalWallet] = useState(false);

    return (
        <div className={`flex px-20 sm:px-5  sm:justify-start sm:overflow-hidden  sm:items-start justify-evenly text-xl font-fomofont  items-center bg-[#212529] mx-5 sm:mx-2 py-4 rounded-b-2xl ${!nav ? 'sm:h-[15vw]' : "h-[320px]"}`} style={{  transition: 'height .5s'}}>
            <span className='text-white font-sans font-[300]' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }} >Fomo3D</span>
            <ul className="flex sm:flex-col sm:mt-16  sm:items-center justify-between items-center ml-16 sm:ml-[-27px] w-full ">
                <li><button onClick={() => setModal(true)} className='p-2 text-white sm:mb-4 rounded-md text-sm hover:border hover:bg-transparent hover:border-[#f000f0] bg-fomopink'>Tutorial</button></li>
                <li><a href="/Community"><button className='text-white sm:mb-4' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }}>Community</button></a></li>
                <li><p className='text-[#6c757d] text-sm sm:hidden font-thin'>You're not connected to Fomo3D</p></li>
                <li><a href="/Fomo3D Wiki"><button className='text-white sm:mb-4' style={{ textShadow: " 0 0 10px #0078f0, 0 0 10px #0034ca" }}>Fomo3D Wiki</button></a></li>
                <li><a className='text-white' href="/Stake P3D"><button style={{ textShadow: "0 0 10px #38f000, 0 0 10px #008020" }} >Stake P3D</button></a></li>
                <li><p className='text-[#6c757d] text-sm 2xl:hidden sm:block my-4 font-thin'>You're not connected to Fomo3D</p></li>

                <li><button onClick={() => setModalWallet(true)} className='border p-2 text-white text-sm rounded-md px-6 hover:bg-fomopink hover:text-black border-[#f000f0]'>Connect</button></li>
            </ul>
            {
                !nav ? <button className='border rounded-md border-[#ffffff1a] p-1'> <img src="/images/icons8-menu-rounded-50.png" alt="menu" className='2xl:hidden h-6 w-12 sm:block' onClick={() => setNav(true)} /> </button> :
                    <button className='border rounded-md border-[#ffffff1a] p-1' onClick={() => setNav(!true)}> <img src="/images/icons8-menu-rounded-50.png" alt="menu" className='2xl:hidden h-6 w-12 sm:block' /></button>
            }

            {
                modal && <TutorialModal setModal={setModal} />
            }
            {
                modalWallet && <ConnectWallet setModalWallet={setModalWallet} />
            }

        </div>
    )
}
