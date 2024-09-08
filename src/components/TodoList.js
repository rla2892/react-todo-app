import React from "react";
import { useSelector } from "react-redux";


export default function TodoList() {
    const list = useSelector((state) => state.todos.todoList);
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {list.map((todo, index) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>

        </div>
    );
}