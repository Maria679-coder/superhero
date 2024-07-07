import React from 'react'

export default function Book({Image,Title,Price}) {
  return <div>

    <div>
        <img src="{Image}" alt="" />
        <h1>{Title}</h1>
        <p>{Price}</p>
    </div>
    
  </div>
}
