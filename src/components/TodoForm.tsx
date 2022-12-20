import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
    addTodo: AddTodo;
  }

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
      }

  return (
    <div>TodoForm</div>
  )
}
