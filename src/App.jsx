import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Passwod from "./Compoments/Passwod"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Passwod/>
    </>
  )
}

export default App
