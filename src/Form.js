import React from 'react'
import {useState} from 'react'

export default function Form(props) {
const a=()=>{
console.log("upper case was clicked")
let n=text.toUpperCase()
setText(n)

}
const b=(event)=>{
  console.log("change")
  setText(event.target.value)
}
  const[text,setText]=useState('enter here');
 
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={b} id="box" rows="6"></textarea>
  <button className='btn btn-primary my-2' onClick={a}>submit</button>
</div>
<div className='container my-3'>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words & {text.length} Character's</p>
</div>


    </>
  )
}
