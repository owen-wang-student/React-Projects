import { useState } from 'react'

export const Input = () => {

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        gender: "",
    })

    const [prompts, setPrompts] = useState([{
        prompt: "",
        answer: "",
        timestamp: new Date().getTime()
    }])

    const handleInput = (e) => {
        const {name, value} = e.target
        setUserInfo({
            ...userInfo, 
            [name]: value 
        })
    }

    const handlePrompt = (e, i) => {
        const {name, value} = e.target
        let newPrompts = [...prompts]
        newPrompts[i][name] = value
        setPrompts(newPrompts)
    }

    const handleAddPrompt = () => {
        setPrompts([...prompts, {
            prompt: "",
            answer: "",
            timestamp: new Date().getTime()
        }])
    }

    const handleDeletePrompt = (i) => {
        let tempPrompts = [...prompts]
        tempPrompts.splice(i, 1)
        setPrompts(tempPrompts)
    }

    return(
        <>
            <form className="w-full max-w-md mx-auto">
                {/* groups related elements within a form*/}
                <fieldset className="flex flex-col border px-4 py-1 gap-3">

                    {/* caption for the fieldset element */}
                    <legend className="text-2xl font-semibold py-1">About You</legend>

                    <div className="flex flex-col w-4/5">
                        <label className="text-2xl font-semibold pt-1">What's your name</label>
                        <input 
                            className="border rounded text-md leading-tight py-2 px-3 mt-3 focus:outline-indigo-200"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            onChange={handleInput}
                        />
                        <input 
                            className="border rounded text-md leading-tight py-2 px-3 mt-2 focus:outline-indigo-200"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-col w-4/5">
                        <label className="text-2xl font-semibold pt-1">What's your email</label>
                        <input 
                            className="border rounded text-md leading-tight py-2 px-3 mt-3 focus:outline-indigo-200"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-col w-4/5">
                        <label className="text-2xl font-semibold pt-1">What's your date of birth</label>
                        <input 
                            className="border rounded text-md leading-tight py-2 px-3 mt-3 focus:outline-indigo-200"
                            id="dob"
                            name="dob"
                            type="date"
                            max="2006-03-15"
                            placeholder="Date of birth"
                            onChange={handleInput}
                        />
                    </div>

                    <div className="flex flex-col w-4/5">
                        <label className="text-2xl font-semibold pt-1">What's your gender</label>
                        <select className="border rounded text-md leading-tight py-2 px-3 my-3 focus:outline-indigo-200" id="gender" name="gender" onChange={handleInput} >
                            <option>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="mtf">MTF</option>
                            <option value="ftm">FTM</option>
                            <option value="nonbinary">Non-Binary</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset className="flex flex-col border px-4 py-1 mt-2 mb-10">
                    <legend className="text-2xl font-semibold py-1">Prompts</legend>

                    {prompts.map((prompt, i) => (
                        <div key={prompt.timestamp} className='flex flex-col w-full'>
                            <div className="flex flex-row justify-between">
                                <label className="text-2xl font-semibold pt-1">Select a prompt</label>
                                <div className="flex flex-col align-center justify-center">
                                    <button 
                                        className="bg-red-400 hover:opacity-70 text-white text-md font-semibold rounded-lg px-3 pb-1" 
                                        onClick={() => handleDeletePrompt(i)}
                                    >
                                        x
                                    </button>
                                </div>
                            </div>

                            <select className="border rounded text-md leading-tight py-2 px-3 my-3 focus:outline-indigo-200" id="prompt" name="prompt" onChange={(e) => handlePrompt(e, i)}>
                                <option >Select</option>
                                <option value="Dating me is like...">Dating me is like...</option>
                                <option value="Fact about me that surprises people:">Fact about me that surprises people:</option>
                                <option value="I want someone who...">I want someone who...</option>
                                <option value="I spend most of my money on:">I spend most of my money on:</option>
                                <option value="The most spontaneous thing I've done">The most spontaneous thing I've done</option>
                                <option value="We're the same type of weird if...">We're the same type of weird if...</option>
                            </select>
                            
                            <textarea 
                                className='border px-3 py-2 mt-2 mb-4'
                                id="answer"
                                name="answer"
                                rows={5}
                                placeholder="Let your true colors shine through"
                                onChange={(e) => handlePrompt(e, i)}
                            >  
                            </textarea>
                        </div>
                    ))}

                    <div className='flex flex-row w-full justify-center align-center'>
                        <button 
                            className="bg-indigo-400 hover:opacity-70 text-white text-md font-semibold rounded-lg py-1 px-2"
                            type="button"
                            onClick={handleAddPrompt}
                        >
                            Add Prompt
                        </button>
                    </div>


                </fieldset>
            </form>
        </>
    )
}