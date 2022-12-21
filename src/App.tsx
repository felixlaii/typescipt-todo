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

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = todoToRemove => {
    let updatedTodos: Array<Todo> = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos);
  }

  const editTodo: EditTodo = todoToEdit => {
    let todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text);
    console.log(todoToUpdateIndex);
  }

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
