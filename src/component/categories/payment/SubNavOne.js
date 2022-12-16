import React, { useState } from 'react'
import PurchaseComponet from './PurchaseComponet'
import VanityAndReferralsComponent from './VanityAndReferralsComponent'
import VaultComponet from './VaultComponent'

export default function SubNavOne() {
    const [items, setItems] = useState('Purchase')


    const ItemBox = () => {
        switch (items) {
            case 'Purchase':
                return <PurchaseComponet />;
            case 'Vault':
                return <VaultComponet />
            case 'Vanity':
                return <VanityAndReferralsComponent />
            default:
                break;
        }
    }

    return (
        <div className="text-white font-fomofont ">
            <ul className="flex items-center mt-6 font-fomofont  justify-between w-[55%]">
                <li className={`rounded-t-md  px-4 py-3 text-lg font-light ${items ==="Purchase" ? "bg-[#212529]" : ""}`}><button onClick={() => setItems('Purchase')}>Purchase</button></li>
                <li className={`rounded-t-md  px-4 py-3 text-lg font-light ${items ==="Vault" ? "bg-[#212529]" : ""}`}><button onClick={() => setItems('Vault')}>Vault</button></li>
                <li className={`rounded-t-md  px-4 py-3 text-lg font-light ${items ==="Vanity" ? "bg-[#212529]" : ""}`}><button onClick={() => setItems('Vanity')}>Vanity & Referrals</button></li>
            </ul>

            {ItemBox()}
        </div>
    )
}
