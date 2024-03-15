import { EditTask } from './EditTask'

export const ToDo = ({task, index, taskList, setTaskList}) => {
    return(
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="flex flex-row justify-between  items-center w-full">
                    <p className="font-semibold text-xl uppercase">
                        {task.projectName}
                    </p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList} index={index}/>
                </div>

                <p className="text-lg py-2">
                    {task.taskDescription}
                </p>
                <div className="flex flex-row justify-center items-center w-full">
                    <button className="bg-red-500 text-white rounded-lg font-semibold py-1.5 px-3 uppercase text-sm mt-6 mb-1">Delete</button>
                </div>
            </div>
        </>
    )
}