import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Actions';
import './TaskInput.css'

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

