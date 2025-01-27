import React ,{useState} from "react";

export default function TextForm(props){

     const handleUpClick=()=>{
          console.log("UpperCase was clicked")
          // setText("you have click on handupclick")
          const newText = text.toUpperCase();
          props.alertf("Uppercase was clicked","success")  

          setText(newText);
     }

     const handleLoClick=()=>{
          console.log("lowercase was clicked")
          setText("you have click on handupclick")
          props.alertf("lowercase was clicked","success")  
     }

     const replace = ()=>{
          const temp = text.replaceAll(before,after);
          props.alertf("replace has done","success")  
          setText(temp);
     }

     const handleOnClick = (event)=>{
          console.log("On clicked")
          setText(event.target.value);
          // props.alertf("lowercase was clicked","success")  

     }

     const handleBefore = (event)=>{
          console.log("On clicked")
          setBeforeText(event.target.value);

     }

     const handleAfter = (event)=>{
          console.log("On clicked")
          setAfterText(event.target.value);
     }

     const [text,setText] = useState('')
     const [before,setBeforeText] = useState('');
     const [after,setAfterText] = useState('');
     // setText("kdsasks")
     return (
          <>
          <div className="container" style={{color:props.theme==='dark'?'white':'black'}}>
              <h1   style={{color:props.theme==='dark'?'white':'black'}}>{props.heading}</h1> 
               <div className="mb-3">
               <label for="mybox"   class="form-label">Example textarea</label>
               <textarea className="form-control my-2" id="mybox" rows="8" style={{backgroundColor:props.theme==='dark'?'grey':'white',color:props.theme==='dark'?'white':'black'}}  value={text}  onChange={handleOnClick}></textarea>
               <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
               <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
               </div>
          </div>
          <div className="container" style={{color:props.theme==='dark'?'white':'black'}}>
               <h1 >Your text summary</h1>
               <p>{text.split(" ").length} words and {text.length} characters</p>
               <p>{.008 * text.split(" ").length} Minute read</p>
               {/* <h2>Preview</h2> */}
               {/* <p>{text}</p> */}
               <input onChange={handleBefore} value={before} type="text" />
               <p>replace with {}</p>
               <input onChange={handleAfter} type="text" value={after}/>
               <button className="btn btn-primary" onClick={replace}>replace</button>
          </div>
          </>

     )
}