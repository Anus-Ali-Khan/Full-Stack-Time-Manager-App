import { CiSearch } from "react-icons/ci";
import React from "react";

const Home = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400">
      <div className="h-[90%] w-[80%] bg-gray-200 rounded-2xl">
        <div className="h-[4rem] w-full bg-white rounded-t-2xl shadow-md flex items-center justify-center gap-4 ">
          <div className="flex items-center w-[70%] gap-2 bg-gray-200 h-[2rem] p-2  rounded-md">
            <CiSearch />
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm"
            />
          </div>
          <button className="bg-[#42a5f5] px-3 py-1 rounded-lg text-white">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
