import Dropdown from "./dropdown";
import Assigned from '../components/assigned'
import Project from "./project";
import Tickettype from "./tickettype";
import Duedate from "./duedate";
import Reporter from "./reporter";
import Addtag from "./addtag";
import PriorityButton from "./prioritybutton";
import Belowthings from "./belowthings";
import { ChevronDown } from "lucide-react"
import { X } from "lucide-react";
export default function Rightticket(){
    return(
        <div className="min-h-screen flex flex-col items-center min-w-[23.7%] rounded-r-[23px] bg-white overflow-hidden 2xl:min-w-[22%] border-l border-[1px] border border-gray border-b border-[1px] border border-gray">
            <div className="w-full h-[71px] px-4 flex items-center shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)] bg-white">
              <PriorityButton/>
              <span className="p-[7px] flex items-center justify-center rounded-md ml-auto bg-[#E6E6E6] 2xl:p-[10px]">
                <X size={17} color="black"/>
              </span>
            </div>
            <div className="relative w-full py-3 space-y-2 flex flex-col items-center 2xl:space-y-4">
                <Dropdown/>
                <Assigned/>
                <Project/>
                <Tickettype/>
                <Duedate/>
                <Reporter/>
                <Addtag/>
                <Belowthings/>
            </div>
        </div>
    )
}