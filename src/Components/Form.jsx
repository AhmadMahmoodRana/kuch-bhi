import React, { useState } from 'react'

const Form = ({setStoreData}) => {

    const [name,setName] = useState("")
    const [cast,setCast] = useState("")
    const [fileURL, setFileURL] = useState("")
    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setFileURL(url);
        console.log('File URL:', url);
      } else {
        setFileURL('');
        console.log('No file selected');
      }
    };

    const onclick = (e) =>{
        e.preventDefault()
        const getData = {
          name : name,
          cast : cast,
          fileURL : fileURL
        }
        setStoreData((prev) => [...prev, getData])
      
        setName("")
        setCast("")
        // console.log(storeData)
      }

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      
<h1 className='font-bold text-black text-xl'>Form</h1>

<form className='flex flex-col w-[500px]'>
<div className='flex gap-3 justify-center items-center mt-10'>
<label htmlFor="">Name:</label>
<input type="text" placeholder='Name' className='text-bold w-[300px] bg-red-100 py-2 px-3' value={name} onChange={(e) => setName(e.target.value)} />
</div>

<div className='flex gap-3 justify-center items-center mt-3'>
<label htmlFor="">Cast:</label>
<input type="text" placeholder='Name' className='text-bold w-[300px] bg-red-100 py-2 px-3' value={cast} onChange={(e) => setCast(e.target.value)} />
</div>

<div className='flex gap-3 justify-center items-center mt-3'>
<label htmlFor="">Data:</label>
<input type="file" placeholder='Name' onChange={handleFileChange} className='text-bold w-[300px] bg-red-100 py-2 px-3' />

</div>
<button type='button' onClick={onclick}>submit</button>


</form>


    </div>
  )
}

export default Form
