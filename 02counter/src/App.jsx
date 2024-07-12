import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const addvalue = ()=>{
    console.log("clicked",counter);
    counter=counter+1
    // if(counter<=20)
    // {

    // }
      setCounter(counter)
  }

  const subvalue = ()=>{

    // if(counter>=0)
    //   {
  
    //   }
      setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addvalue}>Increase Value {counter}</button>
    <br/>
    <button onClick={subvalue}>Decrease Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
