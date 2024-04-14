import React from 'react';
import TaskInput from './Components/TaskInput/TaskInput';
import TaskList from './Components/TaskList/TaskList';

const App = () => {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

