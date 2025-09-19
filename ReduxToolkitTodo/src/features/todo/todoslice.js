import {createSlice, nanoid} from '@reduxjs/toolkit'

 const initialState = {
    todos: [ {id:1, text:"Hello World", completed: false}]
 }

 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo= {
                id: nanoid(),
                text: action.payload.text,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        
        updateTodo: (state, action) => {
            const {id,text} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo && todo.text !== text) {
                todo.text = text
            }
            else {alert("No changes made in the Selected Todo Item")}
        },

        toggleTodo: (state, action) => {
            const { id } = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.completed = !todo.completed
            }
            else {alert("No changes made in the Selected Todo Item")}
        }
    }
 })


 export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions

 export default todoSlice.reducer