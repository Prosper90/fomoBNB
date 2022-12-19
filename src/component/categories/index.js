import React from 'react'
import SubNavOne from './payment/SubNavOne'
import SubNavTwo from './round-and-team/SubNavTwo'

export default function Menu() {
    return (
        <div className="flex justify-between sm:flex-col font-fomofont px-8 sm:px-2 items-start">
         <SubNavOne/>   
         <SubNavTwo/>

        </div>
    )
}
