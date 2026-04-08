import { ChevronRight } from "lucide-react"
export default function Belowthings(){
    const array=[{title:"TASKS",count:undefined},{title:"COLLECTED FIELDS",count:undefined},{title:"LINKED TICKETS",count:2},{title:"HISTORY",count:undefined}]
    return(
        <div className="w-full flex flex-col items-center">
          {array.map(data=><div className="h-[47px] w-full flex items-center justify-start px-3 border-t-1  border border-gray">
            <span className="text-semibold text-primary text-sm">{data.title}</span>
            {data.count?<span className="h-[26px] w-[26px] text-gray ml-1 rounded-md flex items-center justify-center bg-[#DEE0E0]">{data.count}</span>:<></>}
            <span className="h-[26px] w-[26px] flex items-center justify-center ml-auto rounded-md bg-[#DEE0E0]">
                <ChevronRight size={23} color="gray"/>
            </span>
            </div>)}
        </div>
    )
}