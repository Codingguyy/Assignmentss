import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Headset } from "lucide-react"
import { Dice6 } from "lucide-react"
export default function Mostleftticket({value}){
    const [valuee,setvlue]=useState(0)
    const array=[{title:"My Tickets",count:9},{title:"Past Due",count:"4"},{title:"High Priority",count:"11"},{title:"Unassigned",count:"96"},{title:"All Tickets",count:"2,192"}]
    const arrayy=[{title:"LIVE CHATS",icon:Headset},{title:"BOARDS",icon:Dice6}]
    function handleclick(value){
        setvlue(value)
    }
    return(
        <>{value?<div className="min-w-[18%] min-h-screen flex flex-col items-center py-5 bg-[#F0F0F0] rounded-l-[23px]">
            <div className="py-2 px-2 w-[93%] space-x-2  flex items-center justify-start rounded-lg bg-[#DBDBDB]">
                <ChevronDown size={17} color="black"/>
                <div className="font-semibold text-sm text-secondary">Ticket views</div>
            </div>
            <div className="w-[93%] py-2 space-y-3 flex flex-col items-center">{array.map((data,index)=><div className={`w-full px-[6px] py-[6.7px] flex items-center rounded-lg  ${valuee===index?"bg-blue-500":""}`} onClick={(e)=>{e.stopPropagation();handleclick(index)}}>
                <span className={`w-[55%] flex items-center justify-start font-semibold text-sb ${valuee===index?"text-white":""}`}>{data.title}</span>
                <span className={`h-[19px] w-fit p-1 rounded-md  flex items-center justify-center inline-end ml-auto text-xxs ${valuee===index?"bg-[#0B2E5B]":"bg-yellow-white"} bg-white`}>{data.count}</span>
            </div>)}</div>
            <div className="w-[93%] px-1 mt-2 space-y-4 flex flex-col items-start">{arrayy.map(data=><div className="flex items-center">
                <data.icon size={23} color="gray"/>
                <span className="font-semibold text-xxs text-primary ml-2">{data.title}</span>
            </div>)}</div>
        </div>:<></>}</>
    )
}
