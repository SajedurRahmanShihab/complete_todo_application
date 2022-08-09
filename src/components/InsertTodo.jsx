import React from 'react';

const InsertTodo = ({ text, setText, todos, setTodos, setStatus }) => {
    const handleAdd = (e) => {
        e.preventDefault();
        setTodos(
            [
                ...todos, {
                    todoName: text,
                    completed: false,
                    id: Math.floor(Math.random() * 1000)
                }
            ]
        )
        setText('')
    }

    const handleText = (e) => {
        setText(e.target.value)
        e.preventDefault();
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form action="">
            <input value={text} onChange={handleText} type="text" />
            <button onClick={handleAdd}>Add</button>
            <select onChange={statusHandler} name="Filter" id="country">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
        </form>
    );
};

export default InsertTodo;