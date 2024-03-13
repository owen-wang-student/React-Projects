export const ToDo = ({task}) => {
    return(
        <>
            <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
                <div className="flex flex-row justify-between  items-center w-full">
                    <p className="font-semibold text-xl uppercase">
                        {task.projectName}
                    </p>
                    <button>Edit</button>
                </div>

                <p className="text-lg py-2">
                    {task.taskDescription}
                </p>
                <div className="flex flex-row justify-center items-center w-full">
                    <button className="bg-red-500 text-white rounded-lg font-semibold py-1.5 px-2 uppercase text-sm">Delete</button>
                </div>
            </div>
        </>
    )
}