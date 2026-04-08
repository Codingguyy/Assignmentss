export default function Addtag(){
    return(
        <div className="w-full px-3 flex items-center justify-start">
            <div className="flex flex-col items-start gap-[6px] px-1">
                <label htmlFor="Tags" className="font-semibold text-black text-sm">Tags</label>
                <span id="Tags" className="rounded-[30px] flex items-center justify-center px-1 bg-[#E0E0E0] text-mxs text-primary">Add tag <span className="text-base ml-1">+</span></span>
            </div>
        </div>
    )
}