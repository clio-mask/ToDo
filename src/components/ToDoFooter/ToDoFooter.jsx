import React from "react";
import ToDoTasksFilter from "../ToDoTasksFilter/ToDoTasksFilter";

const ToDoFooter = ({ count, filter, activeTab, clear }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <ToDoTasksFilter filter={filter} activeTab={activeTab} clear={clear} />
    </footer>
  );
};

export default ToDoFooter;
