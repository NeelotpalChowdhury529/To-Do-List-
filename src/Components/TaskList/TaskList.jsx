

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../Redux/Actions';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <div className="task-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span>{task.name}</span>
              <span className="timestamp">{new Date(task.timestamp).toLocaleString()}</span>
            </div>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;



