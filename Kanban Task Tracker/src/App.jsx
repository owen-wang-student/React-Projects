import { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { AddTask } from './components/AddTask'
import { ToDo } from './components/ToDo'

function App() {

  const [taskList, setTaskList] = useState([])
  const [completed, setCompleted] = useState([]) // maps each completed similar todos

  useEffect(() => {
    let array = localStorage.getItem("taskList")
    if(array){
      setTaskList(JSON.parse(array))
    }
  }, [])
  
  const [{isOver}, drop] = useDrop(() => ({
    accept: "todo", 
    drop: (item) => addToCompleted(item.id, item.projectName, item.taskDescription, item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addToCompleted = (id, projectName, taskDescription, duration) => {
    const moveTask = taskList.filter((task) => id === task.id)
    setCompleted((completed) => [...completed, {moveTask, projectName, taskDescription, duration}])
  }

  return (
    <>
      <h1 className='text-2xl font-bold py-4 pl-6'>The Task Tracker</h1>
      <div className='flex flex-row items-center'>
        <p className='text-xl pl-6'>Click</p>
        <AddTask taskList1={taskList} setTaskList={setTaskList}/>
        <p className='text-xl'>to add a new task</p>
      </div>
      
      <div className='flex flex-row'>
        <div className='flex flex-col w-full ml-6'> 
          <h2 className='bg-gray-300 mt-4 text-xl font-semibold w-3/4 max-w-lg py-2 px-2'>To-Do:</h2>
          {taskList.map((task, index) =>
              <ToDo key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/> 
          )}
        </div>

        <div className='flex flex-col w-full' ref={drop}> 
          <h2 className='bg-gray-300 mt-4 text-xl font-semibold w-3/4 max-w-lg py-2 px-2'>Completed:</h2>
          {completed.map((task, index) =>
              <ToDo key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/> 
          )}
        </div>
      </div>
    </>
  )
}

export default App
