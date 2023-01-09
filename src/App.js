import React, {useEffect, useState} from 'react';
import Menu from "./component/categories";
import Home from "./component/home/Home";
import NavBar from "./component/nav/NavBar";
import Notify from './component/utils/Notify';
import WarnNotify from './component/utils/WarnNotify';
import { ethers } from 'ethers';
import BeatLoader from "react-spinners/BeatLoader";
import {balanceABI, balanceContract, chainID, gameABI, gameContract} from "./component/chainUtils/constants";

function App() {



            /* global BigInt */
      //variables
      const [provider, setProvider] = useState(undefined);
      const [signer, setSigner] = useState(undefined);
      const [signerAddress, setSignerAddress] = useState(undefined);
      //notification messages
      const [notify, setNotify] = useState(undefined);
      //amount to get
      const [getdata, setGetdata] = useState(0);
      //chain
      const [chain, setChain] = useState(undefined);
      
      //fomo data info
      const [cbalance, setCBalance] = useState();
      //timeleft
      const [ timeleft, SetTimeleft] = useState();
      //user details
      const [playerInfo, setPlayerInfo] = useState();
      //round info
      const [roundInfo, setRoundInfo] = useState();
      //more round info
      //current round
      const [currentRound, setCurrentRound] = useState();
      //current pot
      const [currentPot, setCurrentPot] = useState();
      //balances for teams in current round
      //for whales
      const [whales, setWhales] = useState();
      //for bears
      const [bears, setBears] = useState();
      //for sneks
      const [sneks, setSneks] = useState();
      //for bulls
      const [bulls, setBulls] = useState();
      //playerkeys
      const [playerKeys, setPlayerKeys] = useState();
      //player winning
      const [playerWinnings, setPlayerWinning] = useState();
      //player affilliate code
      const [affcode, setAffcode] = useState();
      //player name
      const [playerName, setPlayerName] = useState();
      //player round eth
      const [playerRoundEth, setPlayerRoundEth]= useState();
      //selected theme
      const [selectedTheme, setSelectedTheme] = useState(2);
      //notification
      const [notifystate, setNotifystate] = useState(false);
      const [notifyMessage, setNotifyMessage] = useState("");
      //refresh timer
      const [callAgain, setCallAgain] = useState(false);
      //warning notification
      const [warnnotify, setWarnNotify] = useState(false);
      const [warnMessage, setWarnMessage] = useState('');
      const [warnType, setWarnType] = useState();
      //player registered
      const [registered, setRegistered] = useState(false);
      //Preloader
      const [loading, setLoading] = useState(false);




   //get contract instances
   //for contract 1
    const getPlayerBookContract = async () => {
        console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signertemp = temporalProvider.getSigner();
        return new ethers.Contract(balanceContract, balanceABI, signertemp);
    }

    //for contract 1
    const getGameContract = async () => {
        console.log("bad guy called");
        const temporalProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const signertemp = temporalProvider.getSigner();
        return new ethers.Contract(gameContract, gameABI, signertemp);
    }


    //get balance
    /*
    const getRegistration = async () => {
      const Contract = await getBalanceContract();
      const registered = await Contract.balances();
      const fix = (Math.round(balance/10) * 10 ) / 10;
      setRegistered();
      
    }
  */

    //getTimeleft
    /*
    const getTime = async () => {
      const Contract = await getGameContract();
      const timeLeft = await Contract.getTimeLeft();
      console.log(ethers.utils.formatEther(timeLeft));
      //const fix = (Math.round(timeLeft/10) * 10 ) / 10;
      const fix = parseInt(BigInt(timeLeft));
      console.log(fix);
      SetTimeleft(fix);
    }
    */

    //getRoundInfo
    const getRoundInfo = async () => {
      const Contract = await getGameContract();
      const roundInfo = await Contract.getCurrentRoundInfo();
      const fix = parseInt(roundInfo[1]);
      //const fix = (Math.round(roundInfo[1]/10) * 10 ) / 10**18;
      let timeLeft = (parseInt(roundInfo[3]));
      //console.log(parseInt(roundInfo[1]));
      //console.log(fix,"fix")
      //console.log(timeLeft);
      /*
      setTimeout(() => {
        console.log("All wrapped up setTimeOut");
        SetTimeleft(timeLeft);   
      }, 3000);
      */
      SetTimeleft(timeLeft);   
      setRoundInfo(fix);
      //setting other datas
      //current pot
      setCurrentPot(((Math.round(roundInfo[5]/10) * 10 ) / 10**18).toFixed(4));
      //get total value in contract
      setCBalance(((Math.round(roundInfo[5]/10) * 10 ) / 10**18).toFixed(4));
      //teams balances
      setWhales(((Math.round(roundInfo[9]/10) * 10 ) / 10**18).toFixed(4));
      //for bears
      setBears(((Math.round(roundInfo[10]/10) * 10 ) / 10**18).toFixed(4));
      //for sneks
      setSneks(((Math.round(roundInfo[11]/10) * 10 ) / 10**18).toFixed(4));
      //for bulls
      setBulls(((Math.round(roundInfo[12]/10) * 10 ) / 10**18).toFixed(4));
    }

    //getPlayerInfo
    const getPlayerInfo = async () => {
      const Contract = await getGameContract();
      const playerInfo = await Contract.getPlayerInfoByAddress(signerAddress);
      console.log(playerInfo);
      setPlayerInfo(playerInfo);
      setPlayerName((Math.round(playerInfo[1]/10) * 10 ) / 10);
      //set if registered
      if((Math.round(playerInfo[0]/10) * 10 ) / 10  == 0) {
        setRegistered(false);
      } else {
        setRegistered(true);
      }
      setAffcode((Math.round(playerInfo[5]/10) * 10 ) / 10);
      setPlayerKeys(((Math.round(playerInfo[2]/10) * 10 ) / 10**18).toFixed(4));
      setPlayerWinning( (parseInt(playerInfo[3])/1e18).toFixed(4) );
      setPlayerRoundEth((Math.round(playerInfo[6]/10) * 10 ) / 10**18);
      
    }



    //get playerInfo


    const clearNotify = () => {
      setNotifystate(false);
      setNotifyMessage("");
    }




    useEffect(() => {
      if(signerAddress) {
        //getBalance();
        //getTime();
        getRoundInfo();
        getPlayerInfo();

       if(notifystate) {
        setTimeout(() => {
          clearNotify();
        }, 10000);
       }

       if(warnnotify) {
        setTimeout(() => {
          setWarnNotify();
        }, 5000);
       }



      }
  
      //console.log(playerInfo);


    }, [signerAddress, notifystate, warnnotify])



  return (
    <div className="h-auto pb-24 bg-cover bg-no-repeat relative" style={{ backgroundImage: "url('/images/uwfomo3dbackground.jpg')", backgroundAttachment:"fixed" }}>
        {loading &&
          <div className="absolute flex flex-col justify-center items-center w-full h-[100%] bg-fomoGrey" >
            <div className="">Note this will take a bit of time , as this is our security measure against hacks</div>
              <BeatLoader color={"#FFFFFF"} loading={loading}  size={25} className='abolute top-[33%]' />
          </div>
          } 

      <NavBar
        signer={signer}
        setSigner={setSigner}
        signerAddress={signerAddress}
        setSignerAddress={setSignerAddress}
        provider={provider}
        setProvider={setProvider}
        chain={chain}
        setChain={setChain}
       />
      <Home
        signer={signer}
        setSigner={setSigner}
        signerAddress={signerAddress}
        setSignerAddress={setSignerAddress}
        cbalance={cbalance}
        timeleft={timeleft}
        callAgain={callAgain}
        setCallAgain={setCallAgain}
        roundInfo={roundInfo}
      />
      {warnnotify &&
        <WarnNotify
         warnMessage={warnMessage}
         setWarnMessage={setWarnMessage}
         warnType={warnType}
         setWarnType={setWarnType}
        />
      }

      <Menu
        signer={signer}
        setSigner={setSigner}
        signerAddress={signerAddress}
        setSignerAddress={setSignerAddress}
        roundInfo={roundInfo}
        whales={whales}
        bears={bears}
        sneks={sneks}
        bulls={bulls}
        currentPot={currentPot}
        playerKeys={playerKeys}
        playerWinnings={playerWinnings}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        notifystate={notifystate}
        setNotifystate={setNotifystate}
        notifyMessage={notifyMessage}
        setNotifyMessage={setNotifyMessage}
        callAgain={callAgain}
        setCallAgain={setCallAgain}
        timeleft={timeleft}
        SetTimeleft={SetTimeleft}
        affcode={affcode}
        setAffcode={setAffcode}
        playerName={playerName}
        setPlayerName={setPlayerName}
        playerRoundEth={playerRoundEth}
        setPlayerRoundEth={setPlayerRoundEth}

        setWarnType={setWarnType}
        setWarnMessage={setWarnMessage}
        setWarnNotify={setWarnNotify}

        registered={registered}

        loading={loading}
        setLoading={setLoading}
       />

       {notifystate && 
        <Notify 
          notifyMessage={notifyMessage}
          setNotifyMessage={setNotifyMessage}/>
       }
    </div>
  );
}

export default App;
