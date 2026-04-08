import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CircleChevronUp } from "lucide-react";
import { CircleChevronDown } from "lucide-react";
import { CircleMinus } from "lucide-react";
export default function PriorityDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const options = [{title:"Low",icon:CircleChevronDown,color:"blue"}, {title:"Medium",icon:CircleMinus,color:"green"},{title:"High",icon:CircleChevronUp,color:"red"}];
  const Icon=options[value].icon
  const colors=options[value].color
  return (
    <div className="relative z-[1000] flex flex-col items-start gap-1 px-4 w-full">
      
      
      <label htmlFor="priority" className="font-semibold text-sm text-black">
        Priority
      </label>

      {/* Dropdown */}
      <div id="priority" className="relative w-[100%]">
        
        {/* Selected box */}
        <div
          onClick={() => setOpen(!open)}
          className="z-999 flex items-center justify-between px-3 py-2 border border-[2px] rounded-md cursor-pointer bg-white"
        >
          <span className="text-sm flex items-center gap-2">
            <span className="text-sm"><Icon size={17} color={colors}/></span>
            <span className="text-black">{options[value].title}</span>
          </span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* Options */}
        {open && (
          <div className="absolute mt-1 w-full bg-white border rounded-md shadow-md z-10">
            {options.map((item,index) => (
              <div
                key={index}
                onClick={() => {
                  setValue(index);
                  setOpen(false);
                }}
                className={`px-3 py-2 space-x-3 flex items-center text-sm cursor-pointer hover:bg-gray-100 ${
                  index === value ? "bg-gray-100" : ""
                }`}
              >
                <span>{<item.icon size={23} color={item.color}/>}</span> <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}