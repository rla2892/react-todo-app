import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todoList: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
