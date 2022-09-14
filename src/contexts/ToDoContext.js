import React, { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [toDoList, setToDoList] = useState([
    {
      title: "Buy a Ticket",
      description: "Buy plain ticket",
    },
    {
      title: "Go Shopping",
      description: "Monthly shopping",
    },
  ]);

  return (
    <ToDoContext.Provider value={[toDoList, setToDoList]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
