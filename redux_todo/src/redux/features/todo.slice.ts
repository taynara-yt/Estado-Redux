import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  atividades: Todo[];
}

const initialState: TodoState = {
  atividades: [
    {
      id: 1,
      text: "HTML Tutorial",
      done: false,
    },
    {
      id: 2,
      text: "CSS Tutorial",
      done: false,
    },
    {
      id: 3,
      text: "JavaScript Tutorial",
      done: false,
    },
    {
      id: 4,
      text: "jQuery Tutorial",
      done: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      state.atividades.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.atividades = state.atividades.filter((todo) => todo.id !== action.payload);
    },
    toggleDone: (state, action) => {
      const todo = state.atividades.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;


