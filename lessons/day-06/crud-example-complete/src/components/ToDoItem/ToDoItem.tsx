import React from 'react'
import { ToDo } from '../../types';
import "./ToDoItem.css"

interface ToDoItemProps {
    todo: ToDo;
    index: number;
    toggleCheckForToDo: (id: string) => void
    deleteToDo: (id: string) => void
}
export default function ToDoItem({ todo, index, toggleCheckForToDo, deleteToDo }: ToDoItemProps) {
  return (
    <div className="to-do-item">
        <p>{index + 1}. {todo.task}</p>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleCheckForToDo(todo.id)} />
        <p className="delete-icon" onClick={() => deleteToDo(todo.id)}>x</p>
    </div>
  )
}
