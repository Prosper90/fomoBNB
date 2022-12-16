import React from 'react'

export default function NavBar() {
    return (
        <div className="flex px-20 justify-evenly text-xl font-fomofont  items-center bg-[#212529] mx-5 py-4 rounded-b-2xl">
            <span className='text-white font-sans font-[300]' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }} >Fomo3D</span>
            <ul className="flex justify-between items-center ml-16 w-full ">
                <li><a href="/tutorial"><button className='p-2 text-white rounded-md text-sm hover:border hover:bg-transparent hover:border-[#f000f0] bg-fomopink'>Tutorial</button></a></li>
                <li><a href="/Community"><button className='text-white' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }}>Community</button></a></li>
                <li><p className='text-[#6c757d] text-sm font-thin'>You're not connected to Fomo3D</p></li>
                <li><a href="/Fomo3D Wiki"><button className='text-white' style={{ textShadow: " 0 0 10px #0078f0, 0 0 10px #0034ca" }}>Fomo3D Wiki</button></a></li>
                <li><a className='text-white' href="/Stake P3D"><button style={{ textShadow: "0 0 10px #38f000, 0 0 10px #008020" }} >Stake P3D</button></a></li>
                <li><a href="/Connect"><button className='border p-2 text-white text-sm rounded-md px-6 hover:bg-fomopink hover:text-black border-[#f000f0]'>Connect</button></a></li>
            </ul>
        </div>
    )
}
