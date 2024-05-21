"use client";

import React, { useEffect, useMemo, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { BiSolidTrash } from "react-icons/bi";
import ApiService from "@/apiService";
import Loading from "./Loading";
import { MdDownloadDone } from "react-icons/md";
import { bgColors, textColors } from "./CustomStyle";
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

const Cards = ({ todos, getData, activeTab }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [updateTodos, setUpdateTodos] = useState({});

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

  const handleEdit = (todo) => {
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

  const filteredTodoList = useMemo(() => {
    if (activeTab === "all") {
      return todos;
    } else {
      return todos.filter((filteredtodo) =>
        filteredtodo.taskType.toLowerCase().includes(activeTab)
      );
    }
  }, [activeTab, todos]);

  const handleCheck = (isCompleted) => {};

  return (
    <div className=" flex gap-4 w-[80%] m-auto mt-8 flex-wrap mb-8 ">
      {isLoading && todos.length === 0 ? (
        <Loading />
      ) : (
        filteredTodoList.map((todo) => (
          <div
            className=" bg-white h-[12rem] w-[32%] p-4 rounded-lg shadow-md relative "
            key={todo.id}
          >
            <div className="flex items-center justify-between">
              <p
                className={`${
                  todo.taskType.toLowerCase() === "business"
                    ? bgColors.primary
                    : todo.taskType.toLowerCase() === "home"
                    ? bgColors.secondary
                    : bgColors.tertiary
                }  ${
                  todo.taskType.toLowerCase() === "business"
                    ? textColors.primary
                    : todo.taskType.toLowerCase() === "home"
                    ? textColors.secondary
                    : textColors.tertiary
                }  p-1 px-2 rounded-full text-xs`}
              >
                {todo.taskType}
              </p>

              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onClick={() => handleCheck(todo.isCompleted)}
                />
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
                      setUpdateTodos({
                        ...updateTodos,
                        title: e.target.value,
                      })
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
              {todo.id === selectedId ? (
                <div className="flex border w-fit rounded-sm border-black items-center">
                  <input
                    type="text"
                    value={updateTodos.description}
                    onChange={(e) =>
                      setUpdateTodos({
                        ...updateTodos,
                        description: e.target.value,
                      })
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
                <p className="mt-2 text-xs">{todo.description}</p>
              )}
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
