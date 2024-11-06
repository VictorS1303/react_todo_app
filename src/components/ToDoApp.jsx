'use client'

import React from 'react'
import {useState} from 'react'


const ToDoApp = () =>
{
    const [tasks, setTasks] = useState([])

    return (
        // 
        <form className="flex gap-6">
            <input className="border-2 border-green-500 rounded-md focus:border-green-800 focus:outline-none p-2 text-black" type="text" placeholder="Enter todo"/>
            <button className="btn submit-todo-btn bg-green-600 p-2 rounded-md uppercase font-semibold tracking-wider" onSubmit={(e) => addTodo(e)}>Submit Todo</button>
        </form>

    )
}

function addTodo(e)
{
    e.preventDefault()
    console.log(e)
}
 
export default ToDoApp