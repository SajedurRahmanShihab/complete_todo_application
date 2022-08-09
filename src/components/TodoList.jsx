import React, { useState } from 'react';


const TodoList = ({ todo, todos, setTodos }) => {

    const [update, setUpdate] = useState('');

    const updateButtonHandler = (e) => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el, todoName: update
                }
            }
            return el
        }))
        e.preventDefault()
    }
    const updateText = (e) => {
        setUpdate(e.target.value)
        e.preventDefault()
    }

    const doneButtonHandler = (e) => {
        setTodos(todos.map((el) => {
            if (todo.id === el.id) {
                return {
                    ...el, completed: !todo.completed
                }
            }
            return el;
        }))
        e.preventDefault();
    }

    const deleteButtonHandler = (e) => {
        // alert('delete button clicked')
        setTodos(todos.filter((el) => todo.id !== el.id))
        e.preventDefault()
    }


    return (
        <div>
            <h1>{todo.todoName}</h1>
            <input onChange={updateText} type="text" />
            <br />
            <button className={`${todo.completed ? "completed" : ''}`} onClick={doneButtonHandler}>Done</button>
            <button onClick={updateButtonHandler}>Update</button>
            <button onClick={deleteButtonHandler}>Delete</button>
        </div>
    );
};

export default TodoList;