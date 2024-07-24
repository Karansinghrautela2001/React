import React from 'react'
import {useState} from 'react'

export default function Form(props) {
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
    <h1 className='container'>{props.heading}</h1>
    <div className=" container mb-3">
  
  <textarea className="form-control" value={text} onChange={b} id="box" rows="6"></textarea>
  <button className='btn btn-primary my-2 mx-2' onClick={a}>upper case</button>
  <button className='btn btn-primary ' onClick={c}>lower case</button>
</div>
<div className='container my-3'>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words & {text.length} Character's</p>
  <p>{0.008 * text.split(" ").length} minutes to read</p>
  <h2>preview
  </h2>
  <p>{text}</p>
</div>
 </>
)
}
