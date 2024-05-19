import React, { useState } from 'react'
import Form from './Components/Form'
import Table from './Components/Table'
const App = () => {
const [name,setName] = useState("")
const [cast,setCast] = useState("")
const [image,setImage] = useState("")



  return (
    <div>
      <Form name={name} setName={setName} cast={cast} setCast={setCast} image={image} setImage={setImage}  />
      <Table/>
    </div>
  )
}

export default App
