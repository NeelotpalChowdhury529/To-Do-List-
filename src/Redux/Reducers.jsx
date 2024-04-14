

import { ADD_TASK,DELETE_TASK,TOGGLE_TASK } from "./Actions";

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    case DELETE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    case TOGGLE_TASK:
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        ),
      };
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
