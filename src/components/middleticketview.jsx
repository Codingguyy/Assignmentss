import { ChevronDown } from 'lucide-react'
import Imagee from '../images/take-a-picture.png'
export default function Middleticketview(){
    return(
        <div className="w-[96%] flex flex-col items-start rounded-lg mt-6 py-3 space-y-2 border border-[2px] border border-gray shadow-[0_4px_4px_rgba(0,0,0,0.1)] bg-white">
            <div className="w-full flex items-center justify-between space-x-2 px-4">
                <span className="flex items-center justify-start space-x-2"><img src={Imagee} alt="An image" className="h-8 w-18 rounded-full object-cover"/>
                <span className="flex flex-col items-start mt-1">
                    <span className="text-base text-primary">Allie Harmon</span>
                    <span className="text-sm text-gray">{`To Danny Amacher <danny@capacity.com>`}</span>
                </span></span>
                <span className="flex flex-col items-end ml-auto">
                    <span className="text-sm text-gray">Feb 9, 2022 10:31 AM</span>
                    <span className="h-8 w-8 flex items-center justify-center rounded-md"><ChevronDown size={17} color="gray"/></span>
                </span>
            </div>
            <p className="text-base text-primary text-left ml-[64px]">poindiemienfebdeidieneunfiemfmeinfeubdue iendienfekwpdwonidn</p>
            <span className="flex items-center justify-start space-x-3 py-2 ml-[64px]">
                <span className="h-[57px] w-[237px] flex flex-col items-start px-3 py-1 rounded-lg bg-[#EBEBEB] shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
                    <span className="font-semibold text-base text-primary">Screen_shots.png</span>
                    <span className="text-base text-gray">16 Jun 2022, 1:30 PM</span>
                </span>
                <span className="h-[57px] w-[237px] flex flex-col items-start px-3 py-1 rounded-lg bg-[#E8E8E8] shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
                    <span className="font-semibold text-base text-primary">Screen_shots.png</span>
                    <span className="text-base text-gray">16 Jun 2022, 1:30 PM</span>
                </span>
            </span>
        </div>
    )
}