
import React, { useState } from "react";
export const UseStateobject=()=>{
    const [ value, setValue] =useState({

        name:"Random",
        fathername :"M.nazeer",
        age:22,
        message:" hi! how are you" ,
        

    })

    const onClick=()=>{
        setValue({...value,name:"Haris", age:21})
    } 
    return(
    <div className="body">
        <h5>Name:{value.name}</h5>
        <p>father name:{value.fathername}</p>
        <p>Age:{value.age}</p>
        <p>Message{value.message}</p>
        <button onClick={onClick} className="btn">Click me change name </button>
    </div>
    )

}

