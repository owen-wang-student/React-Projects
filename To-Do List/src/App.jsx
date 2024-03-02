import { useState } from "react"

import { Input } from "./components/input"

function App() {

  const [taskList, setTaskList] = useState([])

  console.log(taskList);

  return (
    <div>
      <h1>To-Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/> 
      <div>
        {taskList.map((task, index) => 
          <li key={index}>{task}</li>
        )}
      </div>
    </div>
  )
}

export default App
