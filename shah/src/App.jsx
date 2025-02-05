import { useState } from 'react'
 
import './App.css'
// import { use } from 'react';

function App() {

  const [length,setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState('');

  const passwordGenerator = ()=>{
    
  }

  return (
    <>
      <h3 className='text-4xl text-center text-white'>password</h3>
    </>
  )
}

export default App
