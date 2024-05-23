"use client";

import ApiService from "@/apiService";
import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";

const Navbar = ({ getData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskType, setTaskType] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = new ApiService();
    const data = await api.post("/api/v1/users", {
      title: title,
      description: description,
      taskType: taskType,
      dueDate: dueDate,
    });
    await getData();
    console.log(data);
    setTitle("");
    setDescription("");
    setTaskType("");
    setDueDate("");
  };

  return (
    <form
      className="h-fit p-2 w-full bg-white rounded-t-2xl shadow-md flex items-center justify-center gap-6 sticky"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-8 py-2 ">
        {/* <CiSearch /> */}
        <div>
          <label className="text-sm font-semibold">Todo Title:</label>
          <input
            type="text"
            placeholder="Add title"
            className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm flex items-center  gap-2  h-[2rem] p-2  rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Description:</label>
          <input
            type="text"
            placeholder="Add description"
            className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm flex items-center  gap-2  h-[2rem] p-2  rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Task type:</label>
          {/* <input
            type="text"
            placeholder="Add task type"
            className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm flex items-center  gap-2  h-[2rem] p-2  rounded-md"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          /> */}
          <select
            type="text"
            placeholder="Add task type"
            className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm flex items-center  gap-2  h-[2rem] p-2  rounded-md"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            <option disabled selected>
              Select task type
            </option>
            <option value="home">Home</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold">Due Date:</label>
          <input
            type="date"
            placeholder="Add due date"
            className="bg-gray-200 placeholder:text-black outline-none  w-full  placeholder:text-sm flex items-center  gap-2  h-[2rem] p-2  rounded-md"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#42a5f5] px-3 py-1 rounded-lg text-white"
      >
        + Add
      </button>
    </form>
  );
};

export default Navbar;
