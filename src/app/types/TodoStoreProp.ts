import React from "react";
import TodoProp from "./todoProp";

interface TodoStoreProp {
    todos: TodoProp[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number, text: string) => void;
}

export default TodoStoreProp;