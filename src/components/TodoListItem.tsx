import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveTodo;
    editTodo: EditTodo;
  }

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
    const [isEditOn, setIsEditOn] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>(todo.text);
  return (
    <div>TodoListItem</div>
  )
}
