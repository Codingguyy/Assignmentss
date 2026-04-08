import React from 'react'
import Sidebar from './sidebar'
import Maincomponents from './maincomponents'
export default function Belwcontent(){
    return(
        <div className="min-h-screen max-h-[1080px] w-full flex items-start justify-start">
           <Sidebar/>
           <Maincomponents/>
        </div>
    )
}