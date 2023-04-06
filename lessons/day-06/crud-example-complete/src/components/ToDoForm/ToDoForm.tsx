import React, { useState } from 'react';
import './ToDoForm.css';

interface ToDoFormProps {
  addToDo: (name: string) => void
}
export default function ToDoForm({ addToDo }: ToDoFormProps) {
  const [newTaskInput, setNewTaskInput] = useState('');
  const formSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskInput.length > 0) {
      addToDo(newTaskInput);
      setNewTaskInput('')
    }
  }
  return (
    <div>
      <p>Enter a new task:</p>
      <form className="todo-form" onSubmit={formSubmitted}>
        <input type="text" onChange={(e) => setNewTaskInput(e.target.value)} value={newTaskInput} placeholder="Add your to-do"/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
