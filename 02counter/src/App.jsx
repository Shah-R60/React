import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setcounter]= useState(15);

  // let counter=5;
  const addValue = ()=>{
    console.log(counter)
    // counter=counter+1;
    if(counter<20)
    {
      setcounter(counter+1)
    }
  }


  const remove = ()=>{
    console.log(counter)
    // counter=counter+1;
    if(counter>0)
    {
      setcounter(counter-1)
    }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <button onClick = {addValue}>
        Add value
      </button>
      <br />
      <h2>Counter value five:{counter}</h2>
      <button  onClick={remove}>Decrease Value:{counter}</button>
    </>
  )
}

export default App
