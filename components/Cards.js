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
  const [updateTodo, setUpdateTodo] = useState({});

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
    setUpdateTodo(todo);
  };

  const handleDoneEditing = async (id) => {
    const api = new ApiService();
    const editTodo = await api.put(`/api/v1/users/${id}`, {
      title: updateTodo.title,
      description: updateTodo.description,
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

  // Manual logic of updating our database array without api
  // const handleCheck = (todo) => {
  //   const updatedTodoList = todos.map((item) => {
  //     if (item.id === todo.id) {
  //       return {
  //         ...item,
  //         completed: !item.completed,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });

  //   localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  //   setTodos(updatedTodoList);
  //   console.log(updatedTodoList);
  // };

  const handleCheck = async (todo) => {
    const api = new ApiService();
    const data = await api.put(
      `http://localhost:8080/api/v1/users/taskCompletion/${todo.id}`,
      { completed: !todo.completed }
    );
    await getData();
  };

  return (
    <div className=" flex gap-4 w-[80%] h-[80%] m-auto mt-8 flex-wrap mb-8 ">
      {isLoading && todos.length === 0 ? (
        <Loading />
      ) : filteredTodoList.length === 0 ? (
        <div className="flex items-center justify-center h-[50%] w-full">
          <p className="text-center font-medium text-xl">No remaining task</p>
        </div>
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
                  checked={todo.completed}
                  onChange={() => handleCheck(todo)}
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
                    value={updateTodo.title}
                    onChange={(e) =>
                      setUpdateTodo({
                        ...updateTodo,
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
                    value={updateTodo.description}
                    onChange={(e) =>
                      setUpdateTodo({
                        ...updateTodo,
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
