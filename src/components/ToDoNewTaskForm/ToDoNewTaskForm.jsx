import React, { useState } from 'react';

function ToDoNewTaskForm({ add }) {
  const [task, setTask] = useState({ title: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...task,
      id: Date.now(),
      status: 'active'
    };
    if (task.title.length > 0) {
      add(newPost);
      setTask({ title: '' });
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={task.title}
      onChange={(e) => setTask({ ...task, title: e.target.value })}
      onKeyUp={(e) => e.key === 'Enter' && handleSubmit(e)}
    />
  );
}

export default ToDoNewTaskForm;
