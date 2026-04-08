import { useState } from "react"
import { Menu } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { Search } from "lucide-react"
import { CircleChevronDown } from "lucide-react"
import { CircleChevronUp } from "lucide-react"
import { CircleMinus } from "lucide-react"
import { ChevronsRight } from "lucide-react"
import { Funnel } from "lucide-react"
import { RotateCcw } from "lucide-react"
import { CirclePlus } from "lucide-react"
import { Ticketss } from "./store"
import { Ticketindi } from "./store"
import Imagee from '../images/take-a-picture.png'
export default function Leftticket({value,functionn,hide,sethide}){
    const [state,setstate]=useState(false)
    const tickets=Ticketss(s=>s.ticket)
    const ticketindi=Ticketindi(s=>s.ticket)
    const setticketindi=Ticketindi(s=>s.setticket)
    const options = [{title:"Low",icon:CircleChevronDown,color:"blue"}, {title:"Medium",icon:CircleMinus,color:"green"},{title:"High",icon:CircleChevronUp,color:"red"}];
    const arrayy=[{title:"Project: All"},{title:"Type: All"},{title:"Status: All"},{title:"Assignee: All"}]
    function handleclick(){
      functionn(!value)
    }
    function handleclickk(){
      setstate(!state)
    }
    function formatdate(value){
        const date=value.toLocaledateString("en-GB",{
            day:"numeric",
            month:"short"
        })
        return date
    }
    function returnicon(priority){
     let Valuee=CircleChevronUp
     let color=""
     if(priority==="High"){
       Valuee=options[2].icon
       color=options[2].color
     }
     else if(priority==="Medium"){
        Valuee=options[1].icon
        color=options[1].color
     }
     else if(priority==="Low"){
        Valuee=options[0].icon
        color=options[0].color
     }
     return <Valuee size={27} color={color}/>
    }
    function handlehide(){
        sethide(!hide)
    }
    function handleticketindi(data){
        setticketindi(data)
    }
    return(
        <>{hide?<div className="min-w-[57px] h-full flex-1 flex flex-col items-center justify-start py-4">
            <ChevronsRight size={31} color="black" onClick={(e)=>{e.stopPropagation();handlehide()}}/>
            </div>:<div className={`relative z-20 min-w-[22.3%] flex flex-col items-center  min-h-[110%] rounded-l-[23px] shadow-md 2xl:min-w-[21.3%] bg-white`}>
            <div className="h-[71px] w-[100%] flex items-center px-5 rounded-tl-[23px] shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]">
                <Menu size={28} color="black" onClick={(e)=>{e.stopPropagation();handleclick()}}/>
                <div className="flex items-center space-x-1 ml-5">
                    <h3 className="text-xl font-bold whitespace-nowrap">My Tickets</h3>
                    <ChevronDown size={21} color="black" className="mt-[2px] ml-[3px]"/>
                </div>
                <div className="relative p-1 rounded-md bg-[#F0F0F0] ml-auto">
                    <MoreHorizontal size={26} color="#717070" onClick={(e)=>{e.stopPropagation();handleclickk()}}/>
                        {state?<div className="z-[2] absolute h-[647px] w-[477px] flex flex-col items-center px-6 border border-[2px] border border-gray rounded-md bg-white">
                            <span className="w-full flex items-center justify-start py-6">
                                <span className="flex items-center space-x-2 "><Funnel size={26} color="blue"/>
                                <span className="font-semibold text-xl text-primary">Ticket Filters</span></span>
                                <span className="flex items-center justify-start space-x-2  ml-auto"><RotateCcw size={23} color="gray"/>
                                <span className="text-base text-gray">Reset</span>
                                </span>
                            </span>
                            <div className="w-full flex flex-col items-center justify-start gap-2 ">{arrayy.map(data=><div className="h-[47px] w-full flex items-center justify-start px-2 border border-[2px] border border-gray rounded-md">
                                <span className="text-xl text-primary">{data.title}</span>
                                <ChevronDown size={23} color="black" className="ml-auto"/>
                            </div>)}</div>
                            <span className="w-full flex items-center py-3">
                                <span className="flex items-center justify-start space-x-2">
                                    <CirclePlus size={23} color="blue"/>
                                    <span className="text-base text-blue-600">More</span>
                                </span>
                            </span>
                            <span className="min-h-[2px] min-w-[447px] bg-blue-300 mt-[217px]"></span>
                            <span className="w-full flex items-center justify-start mt-[7px]">
                                <input placeholder="Save new View" className="h-[57px] w-[247px] border border-[2px] border border-gray rounded-md pl-3 bg-white"/>
                                <button className="min-h-[57px] min-w-[157px] text-white rounded-md border border-[2px] border border-gray ml-3 bg-blue-500">Save this View</button>
                            </span>
                        </div>:<></>}
                </div>
            </div>
            <div className="relative w-[100%] py-3 shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]">
                <input className="rounded-md pl-10 h-[47px] w-[89%] bg-transparent border border-[#DEDEDE] border border-[2px] placeholder:text-medium placeholder:text-gray-300" placeholder="Search tickets"/>
                <Search size={23} color="gray" className="absolute left-[9%] top-[36%]"/>
            </div>
            <div className="flex-1 w-full overflow-y-auto no-scrollbar min-h-0">{tickets.map(data=><div className={`w-full flex flex-col items-start gap-4 px-3 py-4 hover:bg-[#DEDEDE] ${ticketindi===data?"bg-[#DEDEDE]":""}`} onClick={(e)=>{e.stopPropagation();handleticketindi(data)}}>
                <span className="w-full flex items-center justify-start px-2">
                    <span className="font-semibold text-primary text-mbase">{data.title}</span>
                    <span className="text-sm text-secondary ml-auto leading-none mt-1">{new Date(data.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  })}</span>
                </span>
                <span className="w-full flex items-center justify-start px-2">
                    <span className="w-5 h-5 border border-[#BFBEBD] border border-[2px] rounded-sm"></span>
                    <span className="text-base text-semibold text-gray ml-3">{data.type}</span>
                    <span className="flex items-center ml-auto space-x-1 ">
                        <span className="font-semibold h-fit bg-[#C9D6FF] text-[#8BA5F7] px-1 rounded-[30px]">{data.status}</span>
                        {returnicon(data.priority)}
                        <img src={Imagee} alt="An image" className="h-6 w-6 rounded-full object-cover bg-green-300"/>
                    </span>
                </span>
            </div>)}</div>
        </div>}</>
    )
}