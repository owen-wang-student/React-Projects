import { useState, useEffect } from 'react'
import { EditTask } from './EditTask'

export const ToDo = ({task, index, taskList, setTaskList}) => {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval
        if(running){
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
          }, 10)
        }else if(!running){
          clearInterval(interval);
        }
        return(() => clearInterval(interval));
      }, [running])

    const handleDelete = () => {
        let removeIndex = index
        const [...newTasks] = taskList; 
        newTasks.splice(removeIndex, 1) // removes one item at the index 
        setTaskList(newTasks);
    }

    return(
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="flex flex-row justify-between items-center w-full">
                    <p className="font-semibold text-xl uppercase">
                        {task.projectName}
                    </p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>
                </div>

                <p className="text-lg py-2">
                    {task.taskDescription}
                </p>

                <div className='flex flex-row items-center justify-evenly w-full'>
                    <div className='text-lg font-semibold py-4 w-1/4'>
                        <span>{("0" + Math.floor((time / 360000000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span className='text-sm'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                    </div>

                    <div className='flex flex-row justify-evenly gap-2'>
                        {running ? (
                            <>
                                <button className="border rounded-lg px-3 py-1" onClick={() => setRunning(false)}>Stop</button>
                            </>
                        ) : (
                            <>
                                <button className="border rounded-lg px-3 py-1" onClick={() => setRunning(true)}>Start</button>
                            </>
                        )}
                        <button className="border rounded-lg px-3 py-1" onClick={() => setTime(0)}>Reset</button>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center w-full">
                    <button 
                        className="bg-red-500 text-white rounded-lg font-semibold py-1.5 px-3 uppercase text-sm mt-6 mb-1" 
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}