import React from 'react'
import PurchaseComponet from './payment/PurchaseComponet'
import RoundComponent from './round-and-team/RoundComponent'

export default function Menu() {
    return (
        <div className="flex justify-between font-fomofont px-8 items-start">
         <PurchaseComponet/>
         <RoundComponent/>

        </div>
    )
}
