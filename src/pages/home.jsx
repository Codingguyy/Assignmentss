import React from 'react'
import Navbar from '../components/navbar'
import Belwcontent from '../components/belwcontent'
export default function Home(){
    return(
        <div className="w-full min-h-5.3xl flex flex-col items-center bg-gradient-to-b from-[#0B2E5B] to-[#08264A]">
            <Navbar/>
            <Belwcontent/>
        </div>
    )
}