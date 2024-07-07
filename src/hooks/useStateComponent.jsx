// import React ,{useState} from "react";

//  export function UseStateComponenet() {
//     const [Text, setText] = useState( "Random")
//     function name() {
//         setText("Maria")
//     }
//     return (
//         <div>
//             <h1>UseState Componenet</h1>
//             <h2>{Text}</h2>
//         <button onClick={name}>Click</button>
//         </div>
//     )
// }

import React, { useState } from "react";
import "./App"
 export const UseStateComponenet =()=> {
const [text, settext] = useState({
    name:"random",
    age:24,
    msg:"hi! how are you"
})
const onchange=()=>{
    settext({...text, name:"Haris"})
}
    return(
        <>
        <div className="Container">
        <p className="text">Name:{text.name}</p>
        <p>Age:{text.age}</p>
        <p>Message:{text.msg}</p>
        </div>
        <button className="btn" onClick={onchange}>updateName</button>
        </>
    )
 }




// import React ,{useState} from "react";

//   UseStateComponenet = ()=> {
//     const [name, setname] = useState({
//         name:"Random",
//         age:24,
//         msg:"hey how are you"
//     });
//     const updateValue =()=> {
//         setname({
//             ...names=,
//         });
//     };
//     return (
//         <div>
//             <h1>UseState Componenet</h1>
//             <h2> value 1:{name.name}</h2>
//         <button onClick={updateValue}>Click</button>
//         </div>
//     );
// };

// export default UseStateComponenet
