import React from 'react'
import Navebar from './Navebar'
import TextForm from './TextForm'

function App() {
  return (
    <div>
        {/* <Navebar tittle="I am a new tittle"/> */}
        <Navebar/>
        <div className='container border-l-pink-900'>
        <TextForm Heading="Using Props ....make a heading "/>
        </div>
        </div>
  )
}

export default App