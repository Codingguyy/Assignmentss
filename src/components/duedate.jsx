import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ClipboardList } from "lucide-react";
export default function Duedate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Medium");

  const options = ["6 April 2026", "7 April 2026", "17 April 2026"];

  return (
    <div className="flex flex-col items-start gap-1 px-4 w-full">
      
      
      <label htmlFor="priority" className="font-semibold text-sm text-black">
        Due Date
      </label>

      {/* Dropdown */}
      <div id="priority" className="relative w-[61%]">
        
        {/* Selected box */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-3 py-2 border border-[2px] rounded-md cursor-pointer bg-white"
        >
          <span className="text-sm flex items-center space-x-2">
            <ClipboardList size={17} color="black"/>
            <span className="text-black">mm/dd/yyyy</span>
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
                className={`w-full px-3 py-2 flex items-center justify-start text-sm text-primary cursor-pointer hover:bg-gray-100 ${
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