import TodoList from "@/components/TodoList";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold bg-slate-500 p-2 items-center justify-center flex mb-10 shadow-lg w-full">
        Todo List
      </h1>
      <TodoList />;
    </div>
  );
};

export default Home;
