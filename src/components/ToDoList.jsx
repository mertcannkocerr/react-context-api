import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const [toDoList, setToDoList] = useContext(ToDoContext);
  
  return (
    <div>
      {toDoList.map((toDo) => (
        <ToDoListItem title={toDo.title} description={toDo.description} />
      ))}
    </div>
  );
};
