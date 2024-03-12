import { useState } from 'react'

export const AddTask = () => {

    const [addModal, setAddModal] = useState(false)

    console.log(addModal)

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
                        <div className='w-9/12 flex flex-row justify-between p-5 border bg-white rounded-md'>
                            <h3 className='text-3xl font-semibold'>Add new task</h3>
                            {/* leading - line spacing, float - decides side of element*/}
                            <button 
                                className='px-2 pb-2 text-white text-3xl bg-red-500 float-right leading-none font-semibold block rounded' 
                                onClick={() => setAddModal(false)}
                            >
                                x
                            </button>
                        </div>

                        <form>

                        </form>
                    </div>
                </>
            ) : null}


        </>
    )
}   