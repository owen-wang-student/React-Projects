import { useState } from "react"

import { Input } from "./components/input"
import { Board } from "./components/board"

function App() {

  const [taskList, setTaskList] = useState([])
  
  return (
    <div className='px-12'>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">To-Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList}/> 
      </div>

      <div className='grid grid-cols-3 gap-4 px-4 sm:px-8 md:px-10 lg:px-12'>
        {taskList.map((task, index) => 
          <Board key={index}index={index} displayedTask={task} taskList={taskList} setTaskList={setTaskList}/>
        )}
      </div>
    </div>
  )
}

export default App