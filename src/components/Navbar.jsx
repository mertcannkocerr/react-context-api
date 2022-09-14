import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

export const Navbar = () => {
  const [toDoList, setToDoList] = useContext(ToDoContext);

  return (
    <nav style={{ width: "100%", height: "60px", backgroundColor: "#B7C4CF" }}>
      <h1>To Do: {toDoList.length}</h1>
    </nav>
  );
};
