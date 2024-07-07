import React,{useState} from "react";
import "./Counter.css"

 export function Counter(){
    const [value, setvalue]= useState(0)
function increment(){
    setvalue(value+1)
}
function decrement(){
    if (value<1){
       setvalue(0) 
       alert("hi! you have reached the minimum value")
    }
    else{
        setvalue(value-1)
    }
}
function reset(){
    setvalue(0)

}
    return(
        <div className="counter">
            <h1>Counter</h1>
            <h2>{value}</h2>
        <div className="btns">
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>
        </div>
        </div>
    )
}