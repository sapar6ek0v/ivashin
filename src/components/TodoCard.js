import React, {useState} from 'react';
import axios from "axios";
import {deleteTodo, editTodo} from "../redux/actionCreators/todoReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {Button, Wrapper} from "./styles/TodoCard.styled.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt, faSave} from "@fortawesome/free-solid-svg-icons";

const TodoCard = ({todo}) => {
    const [update, setUpdate] = useState(false)
    const [newTodo, setNewTodo] = useState(todo.todo)
    const {todos} = useSelector(s => s.todo)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        axios.delete(`https://6236c07cf5f6e28a15457446.mockapi.io/todos/${id}`)
            .then(() => {
                dispatch(deleteTodo(todos.filter(todo => todo.id !== id)))
            })
    }

    const onEdit = (id) => {
        axios.put(`https://6236c07cf5f6e28a15457446.mockapi.io/todos/${id}`, {todo: newTodo})
            .then(() => {
                dispatch(editTodo(todos.map(todo => todo.id === id ? {...todo, todo: newTodo} : todo)))
                setUpdate(false)
            })
    }

    const onUpdate = () => {
        setUpdate(true)
    }

    return (
        <Wrapper>
                <div className="d-flex align-items-center">
                    {
                        update
                            ? <input
                                value={newTodo}
                                type="text"
                                onChange={(e) => setNewTodo(e.target.value)}
                            />
                            : <p>{todo.todo}</p>
                    }
                </div>
                <div className="buttons">
                    {
                        update
                            ? <Button bg={"#33a52a"} onClick={() => onEdit(todo.id)}>
                                <FontAwesomeIcon icon={faSave}/>
                              </Button>
                            : <Button bg={"#bca52d"} onClick={onUpdate}>
                                <FontAwesomeIcon icon={faEdit}/>
                              </Button>
                    }
                    <Button bg={"#8a1922"} onClick={() => onDelete(todo.id)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </Button>
                </div>
        </Wrapper>
    );
};

export default TodoCard;