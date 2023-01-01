import React, { useState } from 'react'
import RoundComponent from './RoundComponent'
import TeamsComponet from './TeamsComponet'

export default function SubNavTwo(props) {

    const [items, setItems] = useState('round')


    const ItemBox = () => {
        switch (items) {
            case 'round':
                return <RoundComponent 
                        signerAddress={props.signerAddress}  
                        roundInfo={props.roundInfo}
                        currentPot={props.currentPot}
                        playerKeys={props.playerKeys}
                        playerWinnings={props.playerWinnings}
                        time={props.timeleft} 
                  />;
            case 'teams':
                return <TeamsComponet 
                    signerAddress={props.signerAddress}
                    whales={props.whales}
                    bears={props.bears}
                    sneks={props.sneks}
                    bulls={props.bulls}
                />
            default:
                break;
        }
    }

    return (
        <div className="text-white mt-6 ml-5 sm:ml-0">
            <ul className="flex items-center justify-between w-1/5 sm:w-2/5">
                <li className={`rounded-t-md  px-4 py-3 text-lg font-light ${items ==="round" ? "bg-[#212529]" : ""}`}><button onClick={() => setItems('round')}>Round</button></li>
                <li className={`rounded-t-md  px-4 py-3 text-lg font-light ${items ==="teams" ? "bg-[#212529]" : ""}`}><button onClick={() => setItems('teams')}>Teams</button></li>

            </ul>
                {ItemBox()}
        </div>
    )
}
