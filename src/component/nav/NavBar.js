import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import ConnectWallet from '../utils/ConnectWallet';
import TutorialModal from '../utils/TutorialModal';
import {chainID} from '../chainUtils/constants';
import { ethers } from 'ethers';
import {shortenAddress} from '../chainUtils/trauncate';

export default function NavBar(props) {
    const [modal, setModal] = useState(false);
    const [nav, setNav] = useState(false)
    const [modalWallet, setModalWallet] = useState(false);



    //web3 functions







           //check for correct chain
           const correctChain = async () => {

                //await ethereum.request({ method: "eth_requestAccounts" });
                const chainId = await props.provider.getNetwork();
                if (chainId.chainId !== chainID) {
    
                  try {
                    //switch chain
                    await window.ethereum.request({
                      method: "wallet_switchEthereumChain",
                      params: [
                        {
                          chainId: `0x${Number(97).toString(16)}`,
                        }],
                    });
                    return;
                  } catch (error) {
                    if (error === 4902) {
                      //add the token or currency to metamask
                      await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                          {
                            chainId: `0x${Number(97).toString(16)}`,
                            rpcUrls: [
                              " https://data-seed-prebsc-1-s1.binance.org:8545",
                            ],
                            chainName: "BSC testnet",
                            nativeCurrency: {
                              name: "BSC",
                              symbol: "BNB",
                              decimals: 18,
                            },
                            blockExplorerUrls: [
                              "https://explorer.binance.org/smart-testnet",
                            ],
                          },
                        ],
                      });
                      return;
                    }
                  }
                } 
        
    };



    //connect wallet
    const connect = async (providerarg) => {
        //console.log("Second guy");
        //correctChain();
       await providerarg?.send("eth_requestAccounts", []);
        //set and get signer
        const signer = await providerarg.getSigner();
        props.setSigner(signer);
        //get and set address
        const address = await signer.getAddress();
        props.setSignerAddress(address)
        //set chain
        props.setChain(await signer.getChainId());
        return;
    }


    //onload
    const onLoad = async () => {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        props.setProvider(provider);
        console.log("ran through");
    }

        //useEffect
        useEffect(() => {
        //console.log("Entered");
        if(props.signerAddress) {
            connect();
        }
        
        if(!window.ethereum) {
            //setMetamask(true);
            //use wallet connect
        } else {
            onLoad();
        }
        console.log(props.signerAddress);
    
        }, [props.signerAddress, props.chain])

    return (
        <div className={`flex px-20 sm:px-5  sm:justify-start sm:overflow-hidden  sm:items-start justify-evenly text-xl font-fomofont  items-center bg-[#212529] mx-5 sm:mx-2 py-4 rounded-b-2xl ${!nav ? 'sm:h-[15vw]' : "sm:h-[46vh]"}`} style={{  transition: 'height .5s'}}>
            <span className='text-white font-sans font-[300]' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }} >SOS3D</span>
            <ul className="flex sm:flex-col sm:mt-16  sm:items-center justify-between items-center ml-16 sm:ml-[-27px] w-full ">
                <li><button onClick={() => setModal(true)} className='p-2 text-white sm:mb-4 rounded-md text-sm hover:border hover:bg-transparent hover:border-[#f000f0] bg-fomopink'>Tutorial</button></li>
                <li><a href="/Community"><button className='text-white sm:mb-4' style={{ textShadow: "0 0 2px #690069, 0 0 25px #c0c, 0 0 5px #f0f" }}>Community</button></a></li>
                <li><p className='text-[#6c757d] text-sm sm:hidden font-thin'>{props.signerAddress ? "Connected" : "You're not connected to SOS3D"}</p></li>
                <li><a href="/Fomo3D Wiki"><button className='text-white sm:mb-4' style={{ textShadow: " 0 0 10px #0078f0, 0 0 10px #0034ca" }}>SOS3D Wiki</button></a></li>
                <li><a className='text-white' href="/Stake P3D"><button style={{ textShadow: "0 0 10px #38f000, 0 0 10px #008020" }} >Stake P3D</button></a></li>
                <li><p className='text-[#6c757d] text-sm 2xl:hidden sm:block my-4 font-thin'>{props.signerAddress ? "Connected" : "You're not connected to SOS3D"}</p></li>

                <li><button onClick={() => connect(props.provider)} className='border p-2 text-white text-sm rounded-md px-6 hover:bg-fomopink hover:text-black border-[#f000f0]'> { !props.signerAddress ? "Connect" : shortenAddress(props.signerAddress) } </button></li>
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
