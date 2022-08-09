import React from 'react';

const TodoList = ({ todo, todos, setTodos }) => {

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
            <button className={`${todo.completed ? "completed" : ''}`} onClick={doneButtonHandler}>Done</button>
            <button onClick={deleteButtonHandler}>Delete</button>
        </div>
    );
};

export default TodoList;