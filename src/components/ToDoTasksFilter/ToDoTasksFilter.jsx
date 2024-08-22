/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React from 'react';

function ToDoTasksFilter({ filter, activeTab, clear }) {
  const tabs = ['All', 'Active', 'Completed'];

  const handleTabClick = (tabIndex) => {
    filter(tabIndex);
  };

  return (
    <>
      <ul className="filters">
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              className={activeTab === index ? 'selected' : null}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={() => clear()}>
        Clear completed
      </button>
    </>
  );
}

export default ToDoTasksFilter;
