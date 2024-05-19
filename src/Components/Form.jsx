import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      
<h1 className='font-bold text-black text-xl'>Form</h1>

<form className='flex flex-col w-[500px]'>
<div className='flex gap-3 justify-center items-center mt-10'>
<label htmlFor="">Name:</label>
<input type="text" placeholder='Name' className='text-bold w-[300px] bg-red-100 py-2 px-3' />
</div>

<div className='flex gap-3 justify-center items-center mt-3'>
<label htmlFor="">Cast:</label>
<input type="text" placeholder='Name' className='text-bold w-[300px] bg-red-100 py-2 px-3' />
</div>

<div className='flex gap-3 justify-center items-center mt-3'>
<label htmlFor="">Data:</label>
<input type="file" placeholder='Name' className='text-bold w-[300px] bg-red-100 py-2 px-3' />
</div>


</form>


    </div>
  )
}

export default Form
