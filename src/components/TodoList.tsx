import React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveTodo;
    editTodo: EditTodo;
  }

export const TodoList = () => {
  return (
    <div>TodoList</div>
  )
}
