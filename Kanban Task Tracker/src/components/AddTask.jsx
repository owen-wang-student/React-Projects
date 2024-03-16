import { useState } from 'react'

export const AddTask = ({taskList1, setTaskList}) => {

    const [addModal, setAddModal] = useState(false)
    const [projectName, setProjectName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleAdd = (e) => {
        e.preventDefault()
        console.log(!projectName)
        if(!projectName){
            setErrorMessage("Enter project name to continue")
        }else{
            let tempList = taskList1
            tempList.push({projectName, taskDescription, duration: 0})

            localStorage.setItem("taskList", JSON.stringify(tempList)) //name, location
            window.location.reload() // reload window to include new local storage data 
            
            // setTaskList([...taskList1, {projectName, taskDescription}])
            setAddModal(false)
            setProjectName("")
            setTaskDescription("")
            setErrorMessage("")
        }
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value 
        if(name === "pn"){
            setProjectName(value)
            setErrorMessage("")
        }
        if(name === "pn" && value === ""){
            setErrorMessage("Enter project name to continue")   
        }
        if(name === "td"){
            setTaskDescription(value)
        }
    }

    return(
        <>
            <button 
                className='bg-blue-400 text-white text-sm font-semibold py-1 mx-1.5 px-2.5 rounded-lg hover:opacity-70'
                type='button'
                onClick={() => setAddModal(true)}
            >
                + NEW
            </button>

            {/* conditional rendering for adding a task */}
            {addModal ? (
                <>
                    {/* overflow - scroll bar, fixed - maintains position justify - x, items - y, z - layering, */}
                    <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
                        <div className='w-9/12 max-w-lg rounded-lg shadow-md relative flex flex-col bg-white border'>

                            <div className='flex flex-row justify-between p-5 roundedt-t-md border-b'>
                                <h3 className='text-3xl font-semibold'>Add new task</h3>
                                {/* leading - line spacing, float - decides side of element*/}
                                <button 
                                    className='px-2 pb-2 text-gray-500 text-3xl hover:bg-red-500 hover:text-white float-right leading-none font-semibold block rounded' 
                                    onClick={() => setAddModal(false)}
                                >
                                    x
                                </button>
                            </div>

                            <form className='px-4 pt-4 pb-1'>
                                <div>
                                    <label className='font-semibold text-s text-gray-700 block mb-2' htmlFor='project-name'> 
                                        Project Name
                                    </label>

                                    <input 
                                        className='w-full bg-gray-200 text-gray-700 border px-3 py-3 leading-tight focus:outline-none focus:bg-white'
                                        id='project-name'
                                        type='text'
                                        placeholder='Project name'
                                        name="pn"
                                        value={projectName}
                                        onChange={handleInput}
                                        required
                                    />
                                    <p className='text-red-500 text-center mt-2 mb-5'>{errorMessage}</p>
                                </div>

                                <div>
                                    <label className='font-semibold text-s text-gray-700 block mb-2' htmlFor='task-description'>
                                        Task Description
                                    </label>
                                    <textarea
                                        className='w-full bg-gray-200 text-gray-700 border px-3 py-2.5 mb-5 leading-tight focus:outline-none focus:bg-white'
                                        id='task-description'
                                        rows='5'
                                        placeholder='Task description'
                                        name='td'
                                        value={taskDescription}
                                        onChange={handleInput}
                                        required
                                    >
                                    </textarea>
                                </div>
                            </form>

                            <div className='flex flex-row items-center justify-center p-6 border-t rounded-b'>
                                <button 
                                    className='bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-70'
                                    onClick={handleAdd}
                                >
                                    Add Task
                                </button>
                            </div>

                        </div>
                    </div>
                </>
            ) : null}


        </>
    )
}   