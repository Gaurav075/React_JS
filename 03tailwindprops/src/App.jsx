import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myobj = {
    username : "gaurav",
    age : 21
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText='click me'/>
      <Card username="hitesh" btnText='click me'/>
    </>
  )
}

export default App
