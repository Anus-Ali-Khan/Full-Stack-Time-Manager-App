import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-[4rem] w-full bg-white rounded-t-2xl shadow-md flex items-center justify-center gap-4 sticky">
      <div className="flex items-center w-[70%] gap-2 bg-gray-200 h-[2rem] p-2  rounded-md">
        <CiSearch />
        <input
          type="search"
          placeholder="Search or add todo"
          className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm"
        />
      </div>
      <button className="bg-[#42a5f5] px-3 py-1 rounded-lg text-white">
        + Add
      </button>
    </div>
  );
};

export default Navbar;
