import React from 'react'
import {
  LayoutGrid,
  Kanban,
  FileText,
  Search,
  MessageSquare,
  BarChart3,
  Calendar,
  Bell,
  CheckSquare,
  Users,
  Folder,
  Settings,
  HelpCircle,
} from "lucide-react";
export default function Sidebar(){
    const iconsarray=[{icon:LayoutGrid,id:1},{icon:Kanban,id:2},{icon:FileText,id:3},{icon:Search,id:4},{icon:MessageSquare,id:5},{icon:BarChart3,id:6},{icon:Calendar,id:7},{icon:Bell,id:8},{icon:CheckSquare,id:9},{icon:Users,id:10},{icon:Folder,id:11},{icon:Settings,id:12},{icon:HelpCircle,id:13}]
    const [active,setactive]=React.useState(1)
    function handleclick(value){
       setactive(value)
    }
    return(
        <div className="h-full w-[67px] flex flex-col items-center space-y-4 ml-1 mt-[0.7%]">
        {iconsarray.map(data=><div className="relative p-1"><data.icon size={31} color={`${active===data.id?"#FAB77A":"#2970F2"}`} className={`ml-1`} onClick={(e)=>{e.stopPropagation();handleclick(data.id)}}/>
        {active===data.id?<span className="absolute left-[-47%] top-1/2 -translate-y-1/2 h-11 w-1.7 2xl:w-2.5 bg-[#FAB77A] rounded-r-md"></span>:<></>}
        </div>)}
        </div>
    )
}