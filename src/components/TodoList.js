import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toggleTodoCompleted } from '../redux/slices/todoSlice';


export default function TodoList() {
    const list = useSelector((state) => state.todos.todoList);
    const dispatch = useDispatch();
    const toggleCompleted = (id) => {
        dispatch(toggleTodoCompleted(id));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {list.map((todo, index) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleCompleted(todo.id)} />
                    </li>
                ))}
            </ul>

        </div>
    );
}