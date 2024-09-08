import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TodoInput () {
    const dispatch = useDispatch();
    const [inputTodo, setInputTodo] = useState('');

    const handleAddTodo = () => {
        const todo = {
            id: uuidv4(),
            text: inputTodo
        }
        dispatch(addTodo(todo));
      };

    return (
        <div>
            <input
                type="text"
                value={inputTodo}
                placeholder="Enter your todo"
                onChange={(e) => setInputTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}