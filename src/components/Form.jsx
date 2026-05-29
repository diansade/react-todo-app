import React from 'react'
import { useRef } from 'react';



const Form = ({taskName, setTaskName, tasks, setTasks}) => {

    const inputRef = useRef(null);

    const inputHandler = (e) => {
    setTaskName(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        if(taskName.trim() != "")
            setTasks([...tasks, {
                id : Date.now(),
                text : taskName.trim(),
                isCompleted : false
            }]);
        setTaskName("");
        inputRef.current.focus();

    }

   

  return (
   <div>
        <form onSubmit={addTask}>
            <input ref={inputRef} className=" w-80 mr-5 mt-2 bg-[#fefae0] rounded-sm p-0.5" id="inputTask" type="text" placeholder='Enter Task' value = {taskName} onChange={inputHandler}></input>
            <button type="submit" className="bg-[#606c38] text-white px-3 py-1 rounded-md hover:opacity-90" id="button">Add</button>
        </form>
   </div>
  )
}

export default Form
