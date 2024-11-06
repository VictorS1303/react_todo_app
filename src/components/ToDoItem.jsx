const ToDoItem = ({tasks}) =>
{
    return (
        <ul className="mt-4">
            {
                tasks.map((task) =>
                (
                    <li key={task.id} className="text-black flex justify-between items-center align-center w-fit mb-4">
                        {task.text}
                        
                        <div className="container btns-container ml-16 whitespace-nowrap flex justify-around gap-4">
                            <button className="complete-btn bg-green-500 w-fit p-2 text-white" onClick={toggleTodoState}>Complete</button>
                            <button className="delete-btn w-fit bg-red-600 p-2 text-white">Delete</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
 
export default ToDoItem;