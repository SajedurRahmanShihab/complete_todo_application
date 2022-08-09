import React from 'react';

const InsertTodo = ({ text, setText, todos, setTodos }) => {
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
    return (
        <form action="">
            <input value={text} onChange={handleText} type="text" />
            <button onClick={handleAdd}>Add</button>
        </form>
    );
};

export default InsertTodo;