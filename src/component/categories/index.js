import React from 'react'
import SubNavOne from './payment/SubNavOne'
import SubNavTwo from './round-and-team/SubNavTwo'

export default function Menu() {
    return (
        <div className="flex justify-between font-fomofont px-8 items-start">
         <SubNavOne/>   
         <SubNavTwo/>

        </div>
    )
}
