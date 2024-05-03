import React from "react";

const TabsSection = () => {
  return (
    <div className="w-[77%] m-auto mt-6">
      <p className="font-semibold ">Your notes</p>
      <div className="flex justify-between ">
        <div className="flex mt-6 items-center ">
          <p className="text-xs font-medium px-4 border-b-2  pb-1  border-slate-300 active:text-blue-400 active:border-b-2 active:border-blue-500 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 hover:duration-300 cursor-pointer  ">
            ALL
          </p>
          <p className="text-xs font-medium px-4 border-b-2  pb-1 border-slate-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 hover:duration-300 cursor-pointer ">
            PERSONAL
          </p>
          <p className="text-xs font-medium px-4 border-b-2  pb-1 border-slate-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 hover:duration-300 cursor-pointer ">
            HOME
          </p>
          <p className="text-xs font-medium px-4 border-b-2  pb-1 border-slate-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-500 hover:duration-300 cursor-pointer ">
            BUSINESS
          </p>
        </div>
        <div className="flex items-center mt-6 gap-2">
          <input type="checkbox" />
          <label className="text-xs  font-medium">
            Show only completed notes
          </label>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
