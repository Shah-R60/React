import React, { useState } from 'react';
import './Appa.css';
import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/textForm'
import Alert from "./components/alert"
function App(props) {

  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const [themeColor,setcolor] = useState('#041247');

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }


  // set theme function
  const showThemeColor =(col)=>{
    setcolor(col);
    // toggleMode();
  }

  //toggleMode
  const toggleMode =()=>{
    if(mode==='light')
    {
      setmode("dark")
      document.body.style.background=themeColor
      showAlert("dark mode enable","success")
    }
    else
    {
      setmode("light")
      document.body.style.background='white'
      showAlert("light mode enable","success")
    }
  }
  return (
    <>
    <Navbar title="textUtils" theme={mode} toggleMode={toggleMode}  showThemeColor={showThemeColor}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" alertf={showAlert}  theme={mode}/>
     {/* <About/> */}
    </div>
    </>
  );
}

export default App;
