import {DELETE_TODO, EDIT_TODO, GET_TODOS} from "../types/todoTypes.js";

const storage = JSON.parse(localStorage.getItem('todos')) || []

const initialState = {
    todos: storage,
    isLoading: true
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.todos,
                isLoading: false
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: action.todos
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: action.todos
            }

        default: return state
    }
}

export default reducer