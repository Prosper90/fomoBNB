import { useState } from "react";
import { FaKey, FaPiggyBank, FaRegQuestionCircle } from "react-icons/fa";
import GameRuleTutorial from "../../utils/GameRuleTutorial";


const PurchaseComponet = () => {
      const [modal, setModal] = useState(false);
      const [inputValue, setInputValue] = useState(1);


      const addToValue = (value) => {
          let added;
          if(typeof(inputValue) == "string") {
            added = parseInt(inputValue) + value;
          } else{
            added = inputValue + value;
          }
          setInputValue(added);
      }

      

    return ( 
          <div className="bg-[#212529] font-fomofont w-[46vw] sm:w-full p-4 sm:p-3 rounded-b-2xl rounded-r-2xl">
            <p className="text-base my-1 font-light mb-5 font-fomofont">Purchases of .1 BNB or more have a 1% chance to win some of the 0 BNB airdrop pot, instantly!</p>

            <div className="flex ">
              <div className="text-[#212529] font-fomofont  rounded-l-md bg-[#e9ecef] border-[#ced4da] border px-3 py-2"><FaKey className='text-xl' /> </div>
              <input className="w-full text-center text-black outline-none" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="number" />
              <input className="w-full rounded-r-md bg-[#e9ecef] text-[#c6cbd0] pl-4" type="text" disabled placeholder="@0 BNB" />
            </div>
            
            <div className="flex items-center text-sm font-fomofont font-normal my-3 sm:my-5">
              <button className="border border-[#ffc107] w-full   h-16 hover:bg-[#ffc107] rounded-l-md hover:text-black  py-2  border-r-0 text-[#ffc107] sm:text-[1rem]" onClick={() => addToValue(1)} >+ 1 Key</button>
              <button className="border border-[#ffc107] w-full   h-16 hover:bg-[#ffc107] hover:text-black  border-r-0  py-2  text-[#ffc107] sm:text-[1rem]" onClick={() => addToValue(2)} >+ 2 Keys</button>
              <button className="border border-[#ffc107] h-16 hover:bg-[#ffc107] hover:text-black px-11 sm:px-5 py-2 border-r-0 text-[#ffc107] sm:text-[1rem]" onClick={() => addToValue(5)} >+ <br />5</button>
              <button className="border border-[#ffc107] h-16 hover:bg-[#ffc107] hover:text-black px-11 sm:px-5 py-2 border-r-0 text-[#ffc107] sm:text-[1rem]" onClick={() => addToValue(10)} >+ <br />10</button>
              <button className="border border-[#ffc107] h-16 hover:bg-[#ffc107] rounded-r-md hover:text-black px-12 sm:px-6 py-2 text-[#ffc107] sm:text-[1rem]" onClick={() => addToValue(100)} >+ <br />100</button>
            </div>
            <div className="flex justify-between text-[1rem] font-fomofont my-5 px-1">
              <button disabled className="flex opacity-50 items-center border  border-[#f000f0] w-full justify-center rounded-xl mr-6  bg-[#f000f0] p-1.5"><img src="/images/bnbiconhq.png" className="h-10 mr-1" alt="logo btn" />Send BNB </button>
              <button disabled className="flex opacity-50 items-center border  border-[#f000f0] w-full justify-center rounded-xl  px- p-1.5"><FaPiggyBank className="mr-2" />Use Vault </button>
            </div>
            <div className="flex justify-between items-center  mt-10 px-4 sm:px-1">
              <h3 className="mb-2 text-3xl sm:text-[1.5rem] font-fomofont">Choose a Team</h3>
              <FaRegQuestionCircle onClick={() => setModal(true)} className="text-3xl text-[#ff0] cursor-pointer" />
            </div>

            <div className="flex items-start justify-between">
              <div className="flex flex-col px-1 py-5 justify-between border-r-2 border-[#696969] items-center">
                <img src="/images/tpsnekglowdemo.png" alt="snake" className="h-32"/>
                  <h3 className="text-2xl font-fomofont font-medium my-2">Snek</h3>
                  <p className="text-base text-center  font-light font-fomofont ">Trickle down Divinomics</p>
                  <span className="text-base text-center text-[#32cd32] mt-5 font-light font-fomofont">++ Most dividends</span>
              </div>
              <div className="flex flex-col px-1 py-5 justify-between border-r-2 border-[#696969] items-center">
                <img src="/images/tpwhaleglow.png" alt="whale" className="h-32"/>
                  <h3 className="text-2xl font-fomofont font-medium my-2">Whale</h3>
                  <p className="text-base text-center  font-light font-fomofont ">Feed on the greed of others.</p>
                  <span className="text-base text-center text-[#32cd32] mt-5 font-light font-fomofont">++ Most bnb to <br /> pot</span>
              </div>
              <div className="flex flex-col px-1 py-5 justify-between border-r-2 border-[#696969] items-center">
                <img src="/images/cow.png" alt="bull" className="h-32"/>
                  <h3 className="text-2xl font-fomofont font-medium my-2">Bull</h3>
                  <p className="text-base text-center  font-light font-fomofont ">Break upwards, never stagnate.</p>
                  <span className="text-base text-center text-[#32cd32] mt-5 font-light font-fomofont">+ Balanced distribution</span>
              </div>
              <div className="flex flex-col px-1 py-5 justify-between  items-center">
                <img src="/images/bear.png" alt="bear" className="h-32"/>
                  <h3 className="text-2xl font-fomofont font-medium my-2">Bear</h3>
                  <p className="text-base text-center  font-light font-fomofont ">Stand alone, fight alone.</p>
                  <span className="text-base text-center text-[#32cd32] mt-5 font-light font-fomofont">++ Maximize bnb to current round</span>
              </div>
            </div>
            {
              modal &&  <GameRuleTutorial setModal={setModal}/>
            }
           
          </div>
     );
}
 
export default PurchaseComponet;