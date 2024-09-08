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
        toggleTodoCompleted: (state, action) => {
            const todo = state.todoList.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
