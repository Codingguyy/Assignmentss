import { useState } from "react";
import { ChevronDown } from "lucide-react"
import { MoveRight } from "lucide-react";
export default function PriorityButton(){
    const [value,setvlue]=useState(false)
    const array=[{title:"Work in progress",description:"in progress"},{title:'Needs Review',description:"in progress"},{title:"Completed",description:"Done"}]
    function handleclick(){
        setvlue(!value)
    }
    return(
        <button className="relative z-[1001] h-[34px] flex items-center bg-[#3E9BF0] text-[#0B2E5B] px-2 py-1 rounded-md font-medium 2xl:h-[37px]" onClick={(e)=>{e.stopPropagation();handleclick()}}>
        <span className="mr-1 text-sm text-white 2xl:text-base">To Do</span>
        <span className="mx-2 h-full w-px bg-gray-300"></span>
        <ChevronDown size={17} className="mt-1 text-white" />
        {value?<div className="absolute w-[324px] h-[213px] top-[93%] left-[0%] border border-[1px] border border-gray rounded-md bg-white">{array.map(data=><div className="h-[71px] flex flex-col items-start hover:bg-[#F2F2F2]">
            <span className="px-2 flex items-center justify-start gap-3">
                <MoveRight size={37} color="black"/>
                <span className="text-medium text-primary">{data.title}</span>
            </span>
            <span className="text-secondary text-xs px-[60px]">{data.description}</span>
        </div>)}</div>:<></>}
        </button>
    )
}