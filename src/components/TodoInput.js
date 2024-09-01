import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

export default function TodoInput () {
    const dispatch = useDispatch();
    const [inputTodo, setInputTodo] = useState('');

    const handleAddTodo = () => {
        dispatch(addTodo(inputTodo));
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