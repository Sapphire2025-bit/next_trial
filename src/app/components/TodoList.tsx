// src/components/TodoList.js
import React, { useState } from 'react';
import useTodoStore from '../store/todoStore';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [editTask, setEditTask] = useState('');
    const [editing, setEditing] = useState(-1);
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const updateTodo = useTodoStore((state) => state.updateTodo);

    const handleAddTask = () => {
        if (task) {
            addTodo(task);
            setTask('');
        }
    };

    const handleUpdate = (id: number) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo) {
            setEditTask(todo.text);
            setEditing(id);
        }
    };

    const handleSave = (id: number) => {
        updateTodo(id, editTask);
        setEditing(-1);
        setEditTask('');
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
                        {(todo.id !== editing) ? (
                            <>
                                {todo.text}
                                <button onClick={() => handleUpdate(todo.id)} className="border-yellow-200 border-2 rounded-full m-2 p-1">Edit</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    value={editTask}
                                    onChange={(e) => setEditTask(e.target.value)}
                                    className="border-gray border-2"
                                />
                                <button onClick={() => handleSave(todo.id)} className="border-green-400 border-2 rounded-full m-2 p-1">Save</button>
                            </>
                        )}
                        <button onClick={() => deleteTodo(todo.id)} className="border-red-300 border-2 rounded-full m-2 p-1">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;