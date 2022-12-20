import React from 'react'

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
    onRemoveTodo: RemoveTodo;
    editTodo: EditTodo;
  }

export const TodoListItem = () => {
  return (
    <div>TodoListItem</div>
  )
}
