import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  
  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
