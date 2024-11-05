// src/components/TodoList.js
import React, { useState } from 'react';
import useTodoStore from '../store/todoStore';

const TodoList = () => {
  const [task, setTask] = useState('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const handleAddTask = () => {
    if (task) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div className="m-10">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task"
        className="border-gray border-2"
      />
      <button onClick={handleAddTask} className="border-gray border-2 rounded-full m-2 p-1">Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="border-red-300 border-2 rounded-full m-2 p-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;