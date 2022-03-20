import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../redux/actionCreators/todoReducer.js";
import {nanoid} from "nanoid";
import TodoCard from "./TodoCard.js";
import {Wrapper} from "./styles/Main.styled.js";


const Main = () => {
    const [todo, setTodo] = useState('')
    const [categories, setCategories] = useState('')
    const [selectCategory, setSelectCategory] = useState('All')
    const {todos, isLoading} = useSelector(s => s.todo)
    const dispatch = useDispatch()
    const ref = useRef()


    const postTodos = () => {
        const newTodo = {
            todo,
            categories: categories || "OTHER"
        }

        axios.post(`https://6236c07cf5f6e28a15457446.mockapi.io/todos`, newTodo)
            .then(() => {
                setTodo('')
            })
            .catch(e => console.log(e))
    }


    useEffect(() => {
        axios(`https://6236c07cf5f6e28a15457446.mockapi.io/todos`)
            .then(({data}) => {
                dispatch(getTodos(data))
            })
    }, [todo])

    const handleInput = (e) => {
        let todo = e.target.value
        let category = todo
            .split(' ')
            .filter(it => it.includes('#'))
            .join(' ')
            .slice(1, )
        if (todo.includes("#")) {
            setCategories(category)
            setTodo(todo)
        }
        setTodo(todo)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            postTodos()
            setTodo('')
        }
        if (e.key === 'Escape') {
            ref.current.blur()
            setTodo('')
        }
    }

    if (isLoading) return <h3 className="text-center py-5">Loading...</h3>

    return (
        <Wrapper>
           <div className="container center">
              <div className="text-center">

                  <h2>TO - DO LIST</h2>

                  <div className="d-flex align-items-center">
                      <input
                          ref={ref}
                          value={todo}
                          onChange={handleInput}
                          onKeyDown={handleKeyDown}
                          type="text"
                          className="main_input"
                          placeholder="ADD TODO HERE..."
                      />
                      <button disabled={!todo} onClick={postTodos} className="main_btn">Add Todo</button>
                  </div>

                  <div className="d-flex align-items-center py-4 justify-content-between">


                      <select
                          className="main_select py-2"
                          defaultValue="All"
                          onChange={(e) => setSelectCategory(e.target.value)}
                      >
                          <option value="All">All</option>
                          {
                              todos
                                  .map(todo => todo.categories)
                                  .filter((todo, idx, arr) => arr.indexOf(todo) === idx)
                                  .map(todo => {
                                      const id = nanoid()
                                      return <option className='todo-option' key={id} value={todo}>{todo}</option>
                                  })
                          }
                      </select>

                      <div>
                          <input
                              className="main_select"
                              onChange={(e) => setCategories(e.target.value)}
                              list="todo-categories"
                              type="text"
                              placeholder='ADD YOUR CATEGORY...'
                              required='required'
                          />
                          <datalist id='todo-categories'>
                              <option value="PRODUCTS">PRODUCTS</option>
                              <option value="MEETING">MEETING</option>
                              <option value="DEALS">DEALS</option>
                              <option value="OTHER">OTHER</option>
                          </datalist>
                      </div>

                      <h3>YOUR TODOS:</h3>
                  </div>
                  {
                      todos
                          .filter(todo => todo.categories === selectCategory || selectCategory === 'All')
                          .map(todo => <TodoCard key={todo.id} todo={todo}/>)
                  }
                  {
                      !todos.length && <p className="py-5 text-center fw-bold">You don`t have todo...</p>
                  }
              </div>
           </div>
        </Wrapper>
    );
};

export default Main;