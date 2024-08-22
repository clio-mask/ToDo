import React from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';

function List({ remove, tasks, updateTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem remove={remove} key={task.id} task={task} updateTask={updateTask} />
      ))}
    </ul>
  );
}

export default List;
