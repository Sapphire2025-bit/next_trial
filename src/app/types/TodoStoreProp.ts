import React from "react";
import TodoProp from "./todoProp";

interface TodoStoreProp {
    todos: TodoProp[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
}

export default TodoStoreProp;