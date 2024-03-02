import { useEffect, useState } from 'react' // tracks data and properties between function calls


function App() {


  const[time, setTime] = useState(0) // current state, update state, initial state
  const[running, setRunning] = useState(false)


  // used to perform side effects (calculations that don't effect output value)
  // callback - function with side effect logic
  // dependency - array of dependencies that runs callback only if dependencies change
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

  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <h1 className='text-2xl font-semibold'>StopWatch App</h1>
      <div className='text-xl fonr semibold py-4'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>


      <div className='w-1/3 max-2-sm flex flex-row justify-evenly'>
          {running ? (
            <button className='border rounded-lg py-1 px-3.5' onClick={() => {setRunning(false)}}>Stop</button>
          ): (
            <button className='border rounded-lg py-1 px-3.5'onClick={() => {setRunning(true)}}>Start</button>
          )}
          <button className='border rounded-lg py-1 px-3.5' onClick={() => {setTime(0)}}>Reset</button>
      </div>
    </div>  
  )
}


export default App
