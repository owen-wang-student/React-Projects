import { useState } from 'react'
import { AddTask } from './components/AddTask'
import { ToDo } from './components/ToDo'

function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <>
      <h1 className='text-2xl font-bold py-4 pl-6'>The Task Tracker</h1>
      <div className='flex flex-row items-center'>
        <p className='text-xl pl-6'>Click</p>
        <AddTask taskList1={taskList} setTaskList={setTaskList}/>
        <p className='text-xl'>to add a new task</p>
      </div>
      
      <div> 
        <h2 className='bg-gray-300 ml-6  mt-4 text-xl font-semibold w-3/4 max-w-lg py-2 px-2'>To-Do:</h2>
        {taskList.map((task, index) =>
            <ToDo key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/> 
        )}
      </div>
    </>
  )
}

export default App
