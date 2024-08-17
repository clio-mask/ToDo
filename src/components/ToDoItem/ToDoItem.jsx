import React, { useState } from "react";

const ToDoItem = (props) => {
  const [editedTask, setEditedTask] = useState({ title: props.task.title });

  const toggleComplete = () => {
    const updatedTask = {
      ...props.task,
      status: props.task.status === "complete" ? "active" : "complete",
    };
    props.updateTask(updatedTask);
  };

  const toggleEdit = () => {
    const updatedTask = { ...props.task, editing: !props.task.editing };
    props.updateTask(updatedTask);
  };

  const handleEditedTask = () => {
    if (editedTask.title.length > 0) {
      const updatedTask = {
        ...props.task,
        title: editedTask.title,
        editing: false,
      };
      props.updateTask(updatedTask);
    }
  };

  const getClassName = () => {
    if (props.task.status === "complete" && props.task.editing)
      return "editing";
    else if (props.task.status === "complete") return "completed";
    else if (props.task.editing) return "editing";
    else return null;
  };

  return (
    <li className={getClassName()}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.task.status === "complete"}
          onChange={toggleComplete}
        />
        <label>
          <span className="description">{props.task.title}</span>
        </label>
        <button className="icon icon-edit" onClick={toggleEdit}></button>
        <button
          className="icon icon-destroy"
          onClick={() => props.remove(props.task)}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={editedTask.title}
        onChange={(e) =>
          setEditedTask({ ...editedTask, title: e.target.value })
        }
        onKeyUp={(e) => e.key === "Enter" && handleEditedTask(e)}
      />
    </li>
  );
};

export default ToDoItem;
