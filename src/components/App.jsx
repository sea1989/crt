import React, { useState, useEffect } from 'react';
import AddTask from './Add-task';

import { tasks } from './data';

import './style.css';
import TaskBoard from './Task-board';

export default function App() {
  const [todos, setTodos] = useState(tasks);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        status: 'backlog',
        title: userInput,
        isCompleted: false,
      };

      setTodos((prevState) => {
        return [...prevState, newItem];
      });
    }
  };

  return (
    <React.Fragment>
      <AddTask addTask={addTask} />
      <TaskBoard todos={todos} />
    </React.Fragment>
  );
}
