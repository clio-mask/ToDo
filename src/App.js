import './App.css';
import React, { useState, useMemo } from 'react';
import List from './components/List/List';
import ToDoFooter from './components/ToDoFooter/ToDoFooter';
import ToDoNewTaskForm from './components/ToDoNewTaskForm/ToDoNewTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const filteredTasks = useMemo(() => {
    if (activeTab === 0) return tasks;
    else if (activeTab === 1) return tasks.filter((t) => t.status === 'active');
    else return tasks.filter((t) => t.status === 'complete');
  }, [tasks, activeTab]);

  const addTask = (newTask) => {
    setTasks((tasks) => [...tasks, newTask]);
  };

  const removeTask = (task) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  };

  const updateTask = (updatedTask) => {
    setTasks((tasks) => tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => t.status !== 'complete'));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <ToDoNewTaskForm add={addTask} />
      </header>
      <section className="main">
        <List tasks={filteredTasks} remove={removeTask} updateTask={updateTask} />
        <ToDoFooter
          count={tasks.filter((t) => t.status === 'active').length}
          filter={setActiveTab}
          activeTab={activeTab}
          clear={clearCompleted}
        />
      </section>
    </section>
  );
}

export default App;
