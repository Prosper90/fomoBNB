import React from 'react'
import SubNavOne from './payment/SubNavOne'
import SubNavTwo from './round-and-team/SubNavTwo'

export default function Menu(props) {
    return (
        <div className="flex justify-between sm:flex-col font-fomofont px-8 sm:px-2 items-start">
         <SubNavOne />   
         <SubNavTwo
           signerAddress={props.signerAddress}
           roundInfo={props.roundInfo}
           whales={props.whales}
           bears={props.bears}
           sneks={props.sneks}
           bulls={props.bulls}
           currentPot={props.currentPot}
           playerKeys={props.playerKeys}
           playerWinnings={props.playerWinnings}
         />

        </div>
    )
}
