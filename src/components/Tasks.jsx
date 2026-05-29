import React from 'react'

const Tasks = ({toogleTask, deleteTask, id, text, isCompleted}) => {
  return (
    <div className="flex justify-between items-center w-100 bg-[#fdf5d8] p-6 rounded-xl mt-3 px-4 py-3">
        <div className=" w-90">
          <input className="mr-1" type="checkbox" checked={isCompleted} onChange={() => toogleTask(id)}></input>
          <span className={isCompleted ? "line-through opacity-45" : ""}>{text}</span>
        </div>
        <div className="flex">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" onClick={() => { deleteTask(id)}}>Delete</button>
        </div>
    </div>
  )
}

export default Tasks
