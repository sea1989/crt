import React, { useState, useEffect } from 'react';
import AddTask from './Add-task';

import './style.css';
import TaskBoard from './Task-board';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        completed: false,
      };

      setTodos([...todos, newItem]);
    }
  };

  return (
    <React.Fragment>
      <AddTask addTask={addTask} />
      <TaskBoard todos={todos} />
    </React.Fragment>
  );
}
