

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (name) => ({
  type: ADD_TASK,
  payload: {
    name,
    id: Math.floor(Math.random() * 1000),
    timestamp: Date.now(),
    completed: false,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

