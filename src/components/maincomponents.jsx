import { useState } from "react"
import Leftticket from "./leftticket"
import Rightticket from "./rightticket"
import Midticket from "./midticket"
import Mostleftticket from "./mostleftticket"
export default function Maincomponents(){
    const [show,setshow]=useState(false)
    const [hide,sethide]=useState(false)
    function handleclick(){
        sethide(!hide)
    }
    return(
        <div className="w-[94%] flex items-center max-h-[1080px] min-h-[73%] bg-[#EBEBEB] rounded-[23px] ml-1">
            <Mostleftticket value={show}/>
            <Leftticket value={show} functionn={setshow} hide={hide} sethide={sethide}/>
            {hide?<></>:<span className="relative z-10 h-screen min-w-[2px] hover:bg-blue-600" onClick={(e)=>{e.stopPropagation();handleclick()}}></span>}
            <Midticket value={show}/>
            <Rightticket/>
        </div>
    )
}