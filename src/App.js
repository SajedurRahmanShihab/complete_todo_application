import React, { useState } from 'react';
import './App.css';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <InsertTodo text={text} setText={setText} todos={todos} setTodos={setTodos} />
      {
        todos.map((todo, id) => (
          <TodoList key={id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  );
}

export default App;
