import {DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types/todoTypes.js";

export const getTodos = (data) => {
    localStorage.setItem('todos', JSON.stringify(data))
    return {type: GET_TODOS, todos: data}
}

export const deleteTodo = (data) => {
    localStorage.setItem('todos', JSON.stringify(data))
    return {type: DELETE_TODO, todos: data}
}

export const editTodo = (data) => {
    localStorage.setItem('todos', JSON.stringify(data))
    return {type: EDIT_TODO, todos: data}
}