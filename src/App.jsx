import React, { useState } from 'react'
import Form from './Components/Form'

const App = () => {
const [name,setName] = useState("")
const [cast,setCast] = useState("")
const [image,setImage] = useState("")



  return (
    <div>
      <Form name={name} setName={setName} cast={cast} setCast={setCast} image={image} setImage={setImage}  />
    </div>
  )
}

export default App
