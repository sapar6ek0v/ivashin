import React, {useEffect} from 'react';
import {StyledHeader} from "./styles/Header.styled.js";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../redux/actionCreators/todoReducer.js";


const Header = () => {
    const {todos} = useSelector(s => s.todo)
    const dispatch = useDispatch()

    const deleteAllTodo = () => {
        dispatch(getTodos([]))

        localStorage.removeItem('todos')
    }

    useEffect(() => {
        window.onkeydown = (e) => {
            if (e.key === 'Delete' && window.confirm("Delete all todos?") ) {
                dispatch(getTodos([]))
            }
        }
    }, [dispatch])

    return (
        <StyledHeader>
            <div className="container">
                {
                    !!todos.length && <button onClick={deleteAllTodo} type='button'>DELETE ALL TODO</button>
                }
            </div>
        </StyledHeader>
    );
};

export default Header;