import React, { useState } from 'react'
import { ToDo } from '../../types';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoItem from '../ToDoItem/ToDoItem';
import { v4 } from 'uuid';
import './ToDoList.css';

const MOCK_DATA: ToDo[] = [
    {
        task: "take out trash",
        completed: true,
        id: v4()
    },
    {
        task: "watch football",
        completed: false,
        id: v4()
    },
    {
        task: "fold the laundry",
        completed: true,
        id: v4()
    },
    {
        task: "respond to slack message",
        completed: false,
        id: v4()
    }
]
export default function ToDoList() {
    const [todos, setTodos] = useState<ToDo[]>(MOCK_DATA);

    const toggleCheckForToDo = (id: string) => {
        // make copy to not mutate state
        const allTodos = [...todos];

        // find item at index
        const foundIndex = todos.findIndex(item => item.id === id);

        // toggle completed
        allTodos[foundIndex].completed = !allTodos[foundIndex].completed

        // replace existing state with new array
        setTodos(allTodos);
    };

    const deleteToDo = (id: string) => {
        setTodos(cur => cur.filter(item => item.id !== id));
    }

    const addToDo = (name: string) => {
        // add new todo to the back
        const newToDo: ToDo = {
            completed: false,
            task: name,
            id: v4()
        }
        setTodos(cur => [...cur, newToDo])
    }

  return (
    <div className="to-do-list-app-body">
        <h1>To Do List</h1>
        <p>A place to store your todo's</p>
        <div className="list-of-todos-container">
        {
            todos.map((item, index) => <ToDoItem todo={item} index={index} deleteToDo={deleteToDo} toggleCheckForToDo={toggleCheckForToDo} />)
        }
        </div>
        <ToDoForm addToDo={addToDo}/>
    </div>
  )
}
