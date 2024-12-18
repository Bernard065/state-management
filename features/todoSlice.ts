import { Task, TodoState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



//Define the initial state of the "todo" slice
// The initial state is an object with a "tasks" array to store all the to-do tasks.
const initialState: TodoState = {
  tasks: [],
};

// Define the action creators for the "todo" slice
const todoSlice = createSlice({
  name: "todos", // The name of the slice (usually plural)
  initialState, // The initial state of the slice

  // Define the action creators that will update the state of the slice
  reducers: {
    // Add a new task to the "tasks" array
    // state represents the current state of the slice and action.payload is the new task to be added
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },

    // Remove a task from the "tasks" array
    deleteTask: (state, action: PayloadAction<string>) => {
      // Filter out the task with the given id from the "tasks" array
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    // Toggle the "completed" status of a task
    toggleComplete: (state, action: PayloadAction<string>) => {
      // Find the task with the given id in the "tasks" array and toggle its "completed" status
      const task = state.tasks.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Export the action creators for the "todo" slice
export const { addTask, deleteTask, toggleComplete } = todoSlice.actions;

// Export the reducer for the "todo" slice
export default todoSlice.reducer;
