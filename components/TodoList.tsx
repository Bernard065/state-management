"use client";

import { addTask, deleteTask, toggleComplete } from "@/features/todoSlice";
import { AppDispatch, RootState } from "@/store";
import { Task } from "@/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  // State for the task input and list items
  const [task, setTask] = useState<string>("");

  // useSelector hook to access the Redux store's "todos" slice
  const tasks = useSelector((state: RootState) => state.todos.tasks);

  // useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: task.trim(),
      completed: false,
    };
    // Add the new task to the Redux store
    dispatch(addTask(newTask));
    setTask(""); // Clear the input field after adding the task
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleComplete = (taskId: string) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Todo List */}
      <div className="flex gap-2">
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="flex-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <Button
          onClick={handleAddTask}
          className="bg-blue-300 hover:bg-blue-400 text-white px-4 py-3 rounded-md transition-all"
        >
          Add Task
        </Button>
      </div>

      <ul className="mt-10 space-y-3">
        {tasks.length > 0 ? (
          tasks.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-5 items-center justify-center">
                <span
                  onClick={() => handleToggleComplete(item.id)}
                  className={`cursor-pointer text-lg flex-1 ${item.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                >
                  {item.title}
                </span>
                <Button
                  onClick={() => handleDeleteTask(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition-all"
                >
                  Delete
                </Button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No task yet. Add a task to get started.
          </p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
