import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/features/todoSlice";

export const store = configureStore({
  reducer: {
    // Import your reducers here
    todos: todoReducer,
  },
});

// Export the Root State type and AppDispatch type for use in your components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
