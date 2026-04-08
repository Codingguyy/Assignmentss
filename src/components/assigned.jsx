import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Imagee from '../images/take-a-picture.png'
export default function PriorityDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Medium");

  const options = ["Alice Harmon", "Peter kim", "Homu lohn"];

  return (
    <div className="flex flex-col items-start gap-1 px-4 w-full">
      
      
      <label htmlFor="priority" className="font-semibold w-full flex items-center justify-start text-sm text-gray-500">
        <span className="text-black">Assigned To</span>
        <span className="text-xs text-blue-300 ml-auto">Assign to me</span>
      </label>

      {/* Dropdown */}
      <div id="priority" className="relative w-[100%]">
        
        {/* Selected box */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-3 py-[7px] border border-[2px] rounded-md cursor-pointer bg-white"
        >
          <span className="text-sm gap-1 flex items-center">
            <img src={Imagee} alt="An image" className="h-6 w-6 rounded-full object-cover bg-red-300"/>
            <span className="text-sm text-black">Allice Harmon</span>
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Options */}
        {open && (
          <div className="absolute mt-1 w-full bg-white border rounded-md shadow-md z-10">
            {options.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setValue(item);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 flex items-center justify-start text-sm text-black cursor-pointer hover:bg-gray-100 ${
                  item === value ? "bg-gray-100" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}