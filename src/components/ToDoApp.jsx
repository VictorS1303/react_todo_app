'use client'

import React, { useState } from 'react'
import ToDoItem from '../components/ToDoItem.jsx'


const ToDoApp = () =>
{
    const [tasks, setTasks] = useState([])

    return (
        <div>
            <form className="flex gap-6" onSubmit={addTodo}>
                <input
                    className="border-2 border-green-500 rounded-md focus:border-green-800 focus:outline-none p-2 text-black"
                    type="text"
                    placeholder="Enter todo"
                    name="task"
                />
                <button
                    type="submit"
                    className="btn submit-todo-btn bg-green-600 p-2 rounded-md uppercase font-semibold tracking-wider"
                >
                    Submit Todo
                </button>
            </form>

            <ToDoItem tasks={tasks}/>
        </div>
    )
 

    function addTodo(e)
    {
        // Preventing form from updating page on submit
        e.preventDefault()

        // Creating a new FormData object that receives the target event (here the button click)
        const formData = new FormData(e.target)

        // Let the FormData object recieve the task
        const task = formData.get('task')

        // Creating a newTask object
        const newTask =
        {
            id: crypto.randomUUID(),
            text: task,
            completed: false,
        }

        // Adding a newTask object to the list of already added tasks
        setTasks([...tasks, newTask])
        
        // Resetting the form
        e.target.reset()
    }

}






export default ToDoApp