/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

function ToDoItem({ remove, task, updateTask }) {
  const [editedTask, setEditedTask] = useState({ title: task.title });
  const [dateCreated, setDateCreated] = useState(null);

  const toggleComplete = () => {
    const updatedTask = {
      ...task,
      status: task.status === 'complete' ? 'active' : 'complete'
    };
    updateTask(updatedTask);
  };

  const toggleEdit = () => {
    const updatedTask = { ...task, editing: !task.editing };
    updateTask(updatedTask);
  };

  const handleEditedTask = () => {
    if (editedTask.title.length > 0) {
      const updatedTask = {
        ...task,
        title: editedTask.title,
        editing: false
      };
      updateTask(updatedTask);
    }
  };

  const getClassName = () => {
    if (task.status === 'complete' && task.editing) return 'editing';
    if (task.status === 'complete') return 'completed';
    if (task.editing) return 'editing';
    return null;
  };

  useEffect(() => {
    const updateDate = () => {
      setDateCreated(
        formatDistanceToNow(new Date(task.id), {
          includeSeconds: true
        })
      );
    };
    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, [task.id]);

  return (
    <li className={getClassName()}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.status === 'complete'}
          onChange={toggleComplete}
        />
        <label>
          <span className="description">{task.title}</span>
          <span className="created">{`created ${dateCreated}`}</span>
        </label>
        <button className="icon icon-edit" onClick={toggleEdit} />
        <button className="icon icon-destroy" onClick={() => remove(task)} />
      </div>
      <input
        type="text"
        className="edit"
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
        onKeyUp={(e) => e.key === 'Enter' && handleEditedTask(e)}
      />
    </li>
  );
}

export default ToDoItem;
