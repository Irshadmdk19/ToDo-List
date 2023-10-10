import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='bg-black text-center text-white
      text-4xl p-6 '>Irshad's ToDo Lit</h1>
        <form>
          <input type="text"
          placeholder='ENter a task here' className='text-3xl border-zinc-800 border-4 m-4 px-4 py-2'/>

          <input type="text"
          placeholder='Enter a description' className='text-3xl border-zinc-800 border-4 m-4 px-4 py-2' />

          <button className='bg-black text-white px-4 py-2 text-2xl rounded' >Add Task</button>
        </form>

    </div>
  )
}

export default page