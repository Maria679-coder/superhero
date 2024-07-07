import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here  im store in text variable and then you can change me to uppercase on below click button " );

    const HandelOnChange = (event)=>{
        setText(event.target.value)
    }
    const onChange=()=>{
        let newText =text.toUpperCase();
        setText(newText)
    }
  return (
    <div>
            <h1 className='bg-orange-300 text-2xl'>{props.Heading}</h1>
        <div>  
            <textarea value={text}  onChange={HandelOnChange}  id="Mr box" rows="8"></textarea>
            </div>
            <button className='bg-slate-500' onClick={onChange}>Conver to Uppercase</button>
            

    
    </div>
  )
}
