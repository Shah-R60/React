import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='button'>
        <button onClick={handleclick}>Click me</button>
      </div>
    </>
  )
}

export default App
