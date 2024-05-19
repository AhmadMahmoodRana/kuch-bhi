import React, { useEffect, useState } from 'react'
import Form from './Components/Form'

const App = () => {


const [storeData,setStoreData] = useState([])
console.log(storeData)



  return (
    <div>
      <Form setStoreData={setStoreData} />
    </div>
  )
}

export default App
