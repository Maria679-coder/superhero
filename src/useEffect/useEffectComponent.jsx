import React, { useEffect, useState } from 'react'

function UseEffectComponent() {
    const [value, setValue] = useState(0)
    const [text, setText] = useState("random text")
    useEffect(()=>{
        document.title = `New Value : ${value}`
        console.log('useEffect logic render here..')
    },[value])
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-yellow-500'>
        <h1 className='text-4xl font-serif text-center'>useEffect Component</h1>
        <h1>{value}</h1>
        <h1>{text}</h1>
        <button onClick={()=> setValue(value+1)}className='bg-yellow-500'>Click</button>     
        <button onClick={()=> setText("hey! i'm developer")}className='bg-yellow-500'>Click</button>     

    </div>
  )
}

export default UseEffectComponent