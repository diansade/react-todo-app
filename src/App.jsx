import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks';

function App() {

  const[tasks, setTasks] = useState( () => {
    const storedItems = localStorage.getItem("tasks");
    if(storedItems){
      return JSON.parse(storedItems);
    }else return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])



  const [taskName, setTaskName] = useState("");

  const toogleTask = (id) => {
    {
      setTasks(
        tasks.map((task) => {
          if(task.id === id){
            return {...task, isCompleted : !task.isCompleted};
          }else return task;

        })
      )
    }
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#faedcd]">
        <div className="text-4xl m-3 text-[#583716] font-bold tracking-wide mb-6">TODO LIST</div>
      <div className="shadow-xl rounded-xl bg-[#d4a373] p-2 h-120 w-120 flex flex-col items-center">
        <Form className="m-10"  setTaskName={setTaskName} taskName={taskName} tasks={tasks} setTasks={setTasks}/>
        <div className="mt-10 max-h-85 overflow-y-auto">
          {
            tasks.map((task) => (
              <Tasks toogleTask={toogleTask} deleteTask={deleteTask} id={task.id} key={task.id} text={task.text} isCompleted={task.isCompleted}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
