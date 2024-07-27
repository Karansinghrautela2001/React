import React from 'react'
import {useState} from 'react'



export default function Form(props) {
  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const[btext,setMyText]=useState('dark mode')
  const d=()=>{
    if(myStyle.color === 'black'){
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        outerHeight:'100%'
      })
      setMyText('light mode')
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setMyText('dark mode')
    }
  }



const a=()=>{
console.log("upper case was clicked")
let n=text.toUpperCase()
setText(n)
}
const c=()=>{
  let n=text.toLowerCase()
  setText(n)
}
const b=(event)=>{
  console.log("change")
  setText(event.target.value)
}

const[text,setText]=useState('enter here');
 
  return (
    <>
   
    <div style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='light'?'black':'white',height:800}}>
    <h1 className='container'>{props.heading}</h1>
    <div className=" container mb-3">
  
  <textarea className="form-control" style={myStyle} value={text} onChange={b} id="box" rows="6"></textarea>
  <button className='btn btn-primary my-2 mx-2'  onClick={a}>upper case</button>
  <button className='btn btn-primary ' onClick={c}>lower case</button>
  <button className='btn btn-primary mx-2' onClick={d}>{btext}</button>
</div>
<div className='container my-3'>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words & {text.length} Character's</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
  <h2>preview
  </h2>
  <p>{text}</p>
</div>
</div>
 </>
)
}
