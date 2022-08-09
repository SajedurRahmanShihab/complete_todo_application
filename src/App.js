import React, { useEffect, useState } from 'react';
import './App.css';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([]);


  const filteringTodos = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed !== false))
        break

      case 'incompleted':
        setFilterTodos(todos.filter((todo) => todo.completed !== true))
        break

      default:
        setFilterTodos(todos)
    }
  }
  useEffect(() => {
    filteringTodos();
  }, [status, todos]);



  return (
    <div className="App">
      <h1>Todo App</h1>
      <InsertTodo text={text} setText={setText} todos={todos} setTodos={setTodos} setStatus={setStatus} setFilterTodos={setFilterTodos} />
      {
        filterTodos.map((todo, id) => (
          <TodoList key={id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  );
}

export default App;
