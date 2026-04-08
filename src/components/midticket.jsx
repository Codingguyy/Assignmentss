import { useState } from "react"
import { Bug } from "lucide-react"
import { LucideMessageSquare } from "lucide-react"
import { Eye } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { X } from "lucide-react"
import { Bold } from "lucide-react"
import { Italic } from "lucide-react"
import { Underline } from "lucide-react"
import { List } from "lucide-react"
import { Paperclip } from "lucide-react"
import { Image as Imageicon} from "lucide-react"
import { Link } from "lucide-react"
import { Smile } from "lucide-react"
import { Send } from "lucide-react"
import { Ticketindi } from "./store"
import { FileSlidersIcon } from "lucide-react"
import Middleticketview from "./middleticketview"
import Middleticketoneview from './middleticketoneview'
import Image from '../images/take-a-picture.png'
export default function Midticket({value}){
    const [reply,setrply]=useState(0)
    const array=[{icon:Bold},{icon:Italic},{icon:Underline,size:23},{icon:List,size:23},{icon:Paperclip,size:28},{icon:Imageicon,size:28},{icon:Link,size:28},{icon:FileSlidersIcon,size:28}]
    const ticketindi=Ticketindi(s=>s.ticket)
    function handlereply(value){
        setrply(value)
    }
    return(
        <div className="relative z-10  min-h-[766px] flex-1 flex flex-col items-center bg-white">
            <div className="w-full items-center min-h-[71px] max-h-[71px] shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]">
                <div className="relative flex-1 flex flex-col items-start px-2 mb-1 space-y-1 2xl:px-4 2xl:py-2">
                    <h3 className="font-semibold text-medium text-primary 2xl:text-s2xl">Laudantium neque veritatis</h3>
                    <div className="flex items-center space-x-2">
                        <Bug size={17} color="black"/>
                        <p className="text-xxs text-gray 2xl:text-sm"> OPS-102 (100669518)  <span className="ml-1 mr-1">|</span>  Created 11/14/22 12:32 PST</p>
                        <span className={`absolute top-[45%] right-[2%] flex items-center ${value?"hidden":""} space-x-3 2xl:inline-flex 2xl:${value?"fixed":""}`}>
                        <LucideMessageSquare size={23} color="gray"/>
                        <span className="flex items-center"><Eye size={23} color="gray"/>
                        <span className="text-sm">2</span>
                        </span>
                        <MoreHorizontal size={23} color="gray"/>
                        <span className="relative flex items-center">
  <img
    src={Image}
    className="z-10 w-6 h-6 rounded-full object-cover bg-gray border-2 border-white 2xl:h-8 w-8"
  />
  <img
    src={Image}
    className="z-20 w-6 h-6 rounded-full object-cover border-2 bg-gray  border-white -ml-2 2xl:h-8 w-8"
  />
  <img
    src={Image}
    className="z-30 w-6 h-6 rounded-full object-cover border-2 border-white bg-gray -ml-2 2xl:h-8 w-8"
  />
</span>
                        </span>
                        </div>
                </div>
            </div>
            <div className="w-[96%] flex flex-col items-center bg-white mt-4 rounded-lg border border-[#D9D9D9]border border-[2px] shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
                <div className="w-full min-h-[53px] flex items-center px-3 rounded-t-lg">
                    <span className="h-[53px] flex flex-col items-center">
                        <span className={`font-semibold text-base mt-[10px] ${reply===0?"text-primary":"text-gray"}`} onClick={(e)=>{e.stopPropagation();handlereply(0)}}>Public Reply</span>
                        {reply===0?<span className="min-h-[3.4px] w-[125%] bg-blue-500 mt-auto"></span>:<></>}
                    </span>
                    <span className="h-[53px] flex flex-col items-center ml-7">
                        <span className={`font-semibold text-base mt-[10px] ${reply===1?"text-primary":"text-gray"}`} onClick={(e)=>{e.stopPropagation();handlereply(1)}}>Private Reply</span>
                        {reply===1?<span className="min-h-[3.4px] w-[125%] bg-blue-500 mt-auto"></span>:<></>}
                    </span>
                </div>
                <div className="h-[57px] w-full flex items-center justify-start px-6 border-t border-[1px] border-b border-[1px] border border-[#D9D9D9]">
                    <span className="font-semibold text-base text-gray">To:</span>
                    <span className="h-[26px] flex items-center justify-start space-x-1 ml-2 rounded-[30px] bg-[#D4D7D9]">
                        <img src={Image} alt="An image" className="h-6 w-6 rounded-full object-cover bg-white"/>
                        <span className="text-sm text-primary">{`${ticketindi.createdBy.name?ticketindi.createdBy.name:"Peter kim"} <${ticketindi.createdBy.email?ticketindi.createdBy.email:"peterkim@email.com"}>`}</span>
                        <X size={13} color="black"/>
                    </span>
                </div>
                <textarea className="min-h-[173px] w-full px-6 py-6 bg-white placeholder:text-base" placeholder="Add a reply..."></textarea>
                <div className="w-full min-h-[57px] flex items-center justify-start rounded-b-lg border-t border">
                    <span className="h-full flex items-center justify-start">{array.map(data=><div className="h-full w-[53px] flex items-center justify-center"><data.icon size={data.size?data.size:19} color="gray"/></div>)}</span>
                    <span className="h-full flex items-center justify-start space-x-3 mr-5 ml-auto">
                        <span className="font-semibold text-sm">Add to KB</span>
                        <span className="h-[26px] w-[26px] rounded-md border border-[3px] border border-gray"></span>
                    </span>
                    <span className="h-[37px] w-[37px] flex items-center justify-center rounded-md mr-3 shadow-md bg-[#D9D9D9] hover:bg-blue-400">
                        <Send size={28} color="white"/>
                    </span>
                </div>
            </div>
            <Middleticketview/>
            <Middleticketoneview/>
        </div>
    )
}