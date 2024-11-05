// src/store/todoStore.js
import { create } from "zustand";
import TodoProp from "../types/todoProp";
import TodoStoreProp from "../types/TodoStoreProp";

// יצירת Store באמצעות הפונקציה create מ-zustand
const useTodoStore = create<TodoStoreProp>((set) => ({

  todos: [],

  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),


  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (id: number, text: string) =>
    set((state) => ({
      todos: state.todos.map((todo) => todo.id == id ? {id, text} : todo),
    })),
}));

export default useTodoStore;