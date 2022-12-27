import React, {useEffect, useState} from 'react';
import Menu from "./component/categories";
import Home from "./component/home/Home";
import NavBar from "./component/nav/NavBar";
import { ethers } from 'ethers';
import {balanceABI, balanceContract, chainID, gameABI, gameContract} from "./component/chainUtils/constants";

function App() {

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




   //get contract instances
   //for contract 1
    const getBalanceContract = async () => {
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
    const getBalance = async () => {
      const Contract = await getBalanceContract();
      const balance = await Contract.balances();
      const fix = (Math.round(balance/10) * 10 ) / 10;
      console.log(fix.toLocaleString())
      setCBalance(fix);
    }


    //getTimeleft
    const getTime = async () => {
      const Contract = await getGameContract();
      const timeLeft = await Contract.getTimeLeft();
      const fix = (Math.round(timeLeft/10) * 10 ) / 10;
      console.log(fix);
      SetTimeleft(fix);
    }

    //getRoundInfo
    const getRoundInfo = async () => {
      const Contract = await getGameContract();
      const roundInfo = await Contract.getCurrentRoundInfo();
      const fix = (Math.round(roundInfo[1]/10) * 10 ) / 10;
      console.log(fix);
      setRoundInfo(fix);
      //setting other datas
      //current pot
      setCurrentPot((Math.round(roundInfo[5]/10) * 10 ) / 10);
      //teams balances
      setWhales((Math.round(roundInfo[9]/10) * 10 ) / 10);
      //for bears
      setBears((Math.round(roundInfo[10]/10) * 10 ) / 10);
      //for sneks
      setSneks((Math.round(roundInfo[11]/10) * 10 ) / 10);
      //for bulls
      setBulls((Math.round(roundInfo[12]/10) * 10 ) / 10);
    }

    //getPlayerInfo
    const getPlayerInfo = async () => {
      const Contract = await getGameContract();
      const playerInfo = await Contract.getPlayerInfoByAddress(signerAddress);
      console.log(playerInfo);
      setPlayerInfo(playerInfo);
      setPlayerKeys((Math.round(playerInfo[2]/10) * 10 ) / 10);
      setPlayerWinning((Math.round(playerInfo[3]/10) * 10 ) / 10);
    }



    //get playerInfo



    useEffect(() => {
      if(signerAddress) {
        getBalance();
        getTime();
        getRoundInfo();
        getPlayerInfo();
      }
  
      console.log(playerInfo);


    }, [signerAddress])


  return (
    <div className="h-auto pb-24 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/uwfomo3dbackground.jpg')" }}>
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
      />
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
       />
    </div>
  );
}

export default App;
