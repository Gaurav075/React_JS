import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      state.editingTodo = null;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    startEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },

  },
});

export const { addTodo, removeTodo, startEditingTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;