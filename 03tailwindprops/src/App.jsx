import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './temp/t'


function App() {

  let myobj = {
    name:"rahul",
    age:21
  }

  return (
    <>

    {/* <h1>RAHUL</h1> */}
    <Card  channel="chaiaurcode  myarr={myobj} "/>
    </>
  )
}

export default App
