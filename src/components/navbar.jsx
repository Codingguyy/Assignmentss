import React from 'react'
import {LifeBuoy} from 'lucide-react'
import { Search } from 'lucide-react'
import { Plus } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { HelpCircle } from 'lucide-react'
import { Gift } from 'lucide-react'
import Imagee from '../images/take-a-picture.png'
import { Ticketss } from './store'
export default function Navbar(){
    const tickets = [
  {
    id: 1,
    title: "Login issue on mobile app",
    description: "User unable to login using Google auth",

    createdBy: {
      name: "Danny Amacher",
      email: "danny@capacity.com",
      avatar: "/user1.png"
    },

    status: "To Do",
    priority: "High",
    type: "Bug",

    messagesCount: 3,
    attachmentsCount: 1,

    assignees: [
      { id: 1, name: "John Carter", avatar: "/avatar1.png" },
      { id: 2, name: "Sarah Lee", avatar: "/avatar2.png" }
    ],

    createdAt: "2026-04-07T10:30:00Z"
  }
];
const settickets=Ticketss(s=>s.settickets)
    function handlewidth(){
        alert(`${window.innerWidth}-${window.innerHeight}`)
        window.innerWidth=1920
        window.innerHeight=1024
    }
    function handleclick(){
        settickets(tickets)
    }
    return(
        <div className="w-full flex items-center justify-start px-5 h-[67px] 2xl:h-[77px]">
          <LifeBuoy size={37} color="white"/>
          <h2 className="text-2xl text-white leading-relaxed ml-4 mt-1" onClick={(e)=>{e.stopPropagation();handleclick()}}>Helpdesk</h2>
          <div className="relative h-[53px] w-[27.3%] ml-[11.3%] rounded-md mt-0.5 2xl:ml-[25%]">
            <input className="min-w-[100%] h-[53px] pl-10 pb-1 rounded-md placeholder:text-base placeholder:" placeholder="Search Capacity..."/>
            <Search size={23} color="gray" className="absolute top-[27.3%] left-[2.7%]"/>
            </div>
            <button className="ml-[22.1%] h-[41px] flex items-center bg-white text-[#0B2E5B] px-4 rounded-md font-medium" onClick={(e)=>{e.stopPropagation();handlewidth()}}>
                <span className="mr-1 text-sm">Create</span>
                
  <span className="mx-2 h-full w-px bg-gray-300"></span>
  <ChevronDown size={17} className="ml-1 mt-1"/>
</button>
    <div className="flex items-center space-x-4 ml-[1.7%]">
       <HelpCircle size={26} color="#5E94F7"/>
       <Gift size={26} color="#5E94F7"/>
       <img src={Imagee} alt="An image" className="h-10 w-10 rounded-full object-cover bg-white"/>
    </div>
        </div>
    )
}