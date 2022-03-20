import {composeWithDevTools} from "redux-devtools-extension/developmentOnly.js"
import {applyMiddleware, createStore, combineReducers} from "redux"
import thunk from "redux-thunk"
import todo from "./reducers/todoReducer.js";

const initialState = {}

const rootReducer = combineReducers({
    todo
})

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
)