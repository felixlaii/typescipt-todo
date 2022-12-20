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

    const onDelete = () => {
        onRemoveTodo(todo);
      }

    const onEdit = () => {
        console.log('edit');
      }
      
    const onTodoUpdate = (e: any) => {
        let text = e.target.value;
        setInputText(text);
        editTodo(text);
      }
    
    const dropdownOptions: Array<Option> = [
        {
            value: "delete",
            onClick: onDelete,
            color: "red",
        },
        {
            value: "edit",
            onClick: onEdit,
            color: "blue",
        }
    ]

  return (
    <div>TodoListItem</div>
  )
}
