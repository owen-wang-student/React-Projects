export const Board = ({displayedTask, index, taskList, setTaskList}) => {
    
    const handleDelete = () => {
        let removeIndex = index
        const [...newTasks] = taskList; 
        newTasks.splice(removeIndex, 1) // removes one item at the index 
        setTaskList(newTasks);

        //secondary solution
            //let removeIndex = index
            //taskList.splice(removeIndex, 1)
            //setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
    
    return(
        <>
            <div className="max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-4 md:px-5">
                <p>{displayedTask}</p>

                <button className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4' onClick={handleDelete}>
                    DELETE  
                </button>   

            </div>
        </> 
    )
}