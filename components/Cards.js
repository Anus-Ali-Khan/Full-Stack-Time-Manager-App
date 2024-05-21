"use client";

import React, { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";
import ApiService from "@/apiService";
import Loading from "./Loading";
import { MdDownloadDone } from "react-icons/md";

// import { bgColors } from "@/CustomStyle";
// import { textColors } from "@/CustomStyle";

// const todos = [
//   {
//     id: 1,
//     type: "Business",
//     title: "Finish the task on the board",
//     description:
//       "Remember to finish the task on the board. After finishing give for evaluation Matt.",
//     date: "22.01.2024",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     type: "Personal",
//     title: "Finish the task on the board",
//     description:
//       "Remember to finish the task on the board. After finishing give for evaluation Matt.",
//     date: "22.01.2024",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     type: "Home",
//     title: "Finish the task on the board",
//     description:
//       "Remember to finish the task on the board. After finishing give for evaluation Matt.",
//     date: "22.01.2024",
//     isCompleted: false,
//   },
// ];

const Cards = ({ todos, getData }) => {
  // const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [updateTodos, setUpdateTodos] = useState({});

  // const getData = async () => {
  //   const api = new ApiService();
  //   const data = await api.get("/api/v1/users");
  //   setTodos(data);
  //   console.log(data);
  // };

  useEffect(() => {
    setIsLoading(true);
    getData().then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    const api = new ApiService();
    const deleteTodo = await api.delete(`/api/v1/users/${id}`);
    await getData();
  };

  const handleEdit = async (todo) => {
    setSelectedId(todo.id);
    setUpdateTodos(todo);
  };

  const handleDoneEditing = async (id) => {
    const api = new ApiService();
    const editTodo = await api.put(`/api/v1/users/${id}`, {
      title: updateTodos.title,
      description: updateTodos.description,
    });
    setSelectedId("");
    await getData();
  };

  return (
    <div className=" flex gap-4 w-[80%] m-auto mt-8 flex-wrap mb-8 ">
      {isLoading && todos.length === 0 ? (
        <Loading />
      ) : (
        todos.map((todo) => (
          <div
            className=" bg-white h-[12rem] w-[32%] p-4 rounded-lg shadow-md relative "
            key={todo.id}
          >
            <div className="flex items-center justify-between">
              <p
                className={`text-xs bg-purple-400 text-purple-950 p-1 px-2 rounded-full`}
              >
                {todo.taskType}
              </p>

              <div className="flex items-center gap-4">
                <input type="checkbox" />
                <MdModeEdit
                  onClick={() => handleEdit(todo)}
                  className="cursor-pointer"
                />
                <BiSolidTrash
                  onClick={() => handleDelete(todo.id)}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-4">
              {todo.id === selectedId ? (
                <div className="flex border w-fit rounded-sm border-black items-center">
                  <input
                    type="text"
                    value={updateTodos.title}
                    onChange={(e) =>
                      setUpdateTodos({ ...updateTodos, title: e.target.value })
                    }
                    className="px-2"
                  />
                  <MdDownloadDone
                    size={20}
                    className="text-green-600 cursor-pointer"
                    onClick={() => handleDoneEditing(todo.id)}
                  />
                </div>
              ) : (
                <p className="text-base font-semibold">{todo.title}</p>
              )}
              <p className="mt-2 text-xs">{todo.description}</p>
            </div>
            <p className="text-xs text-slate-400 absolute top-[82%] left-[73%]">
              {todo.dueDate}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
