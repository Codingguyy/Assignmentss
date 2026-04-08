import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Project() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Administrative");

  const options = ["Administrative", "Administrative", "Administrative"];

  return (
    <div className="flex flex-col items-start gap-1 px-4 w-full">
      
      
      <label htmlFor="priority" className="font-semibold text-sm text-black">
        Project
      </label>

      {/* Dropdown */}
      <div id="priority" className="relative w-[100%]">
        
        {/* Selected box */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-3 py-2 border border-[2px] rounded-md cursor-pointer bg-white"
        >
          <span className="text-sm text-black">{value}</span>
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