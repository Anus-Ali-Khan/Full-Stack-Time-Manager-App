import React from "react";
import { MdModeEdit } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";

const todos = [
  {
    type: "Business",
    title: "Finish the task on the board",
    description:
      "Remember to finish the task on the board. After finishing give for evaluation Matt.",
    date: "22.01.2024",
    isCompleted: false,
  },
  {
    type: "Business",
    title: "Finish the task on the board",
    description:
      "Remember to finish the task on the board. After finishing give for evaluation Matt.",
    date: "22.01.2024",
    isCompleted: false,
  },
  {
    type: "Business",
    title: "Finish the task on the board",
    description:
      "Remember to finish the task on the board. After finishing give for evaluation Matt.",
    date: "22.01.2024",
    isCompleted: false,
  },
];

const Cards = () => {
  return (
    <div className=" flex gap-4 w-[77%] m-auto mt-8 flex-wrap">
      {todos.map((todo) => (
        <div className=" bg-white h-[12rem] w-[32%] p-4 rounded-lg shadow-md relative">
          <div className="flex items-center justify-between">
            <p className="text-xs bg-purple-400 text-purple-950 p-1 px-2 rounded-full">
              {todo.type}
            </p>

            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <MdModeEdit />
              <BiSolidTrash />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-base font-semibold">{todo.title}</p>
            <p className="mt-2 text-xs">{todo.description}</p>
          </div>
          <p className="text-xs text-slate-400 absolute top-[82%] left-[73%]">
            {todo.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
