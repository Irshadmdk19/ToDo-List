"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const subHandler=(e)=>{

    // this will stop my page from reloading(if reloaded it will erase my task from text while submitting)
    e.preventDefault() 
    
    settitle("")
    setdesc("")

    setmainTask([...mainTask,{title,desc}])

  }
  let renderTask=<h2>No Task is available</h2>
    if(mainTask.length>0){
      renderTask=mainTask.map((task,index)=>{
        return(
          <li className='flex items-center justify-between'>
            <div className='flex items-center justify-between mb-5 w-2/3'>
             <h5 className='text-2xl font-semibold'>{task.title}</h5>
             <h6 className='text-xl font-semibold' >{task.desc}</h6>
            </div>

              <button className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>

          </li>
        )
      })
    }


  return (
    <div>
      <h1 className='bg-black text-center text-white
      text-4xl p-6 '>Irshad's ToDo Lit</h1>
        <form onSubmit={subHandler}>
          <input type="text"
          placeholder='Enter a Title here' className='text-3xl border-zinc-800 border-4 m-4 px-4 py-2'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          />

          <input type="text"
          placeholder='Enter a description' className='text-3xl border-zinc-800 border-4 m-4 px-4 py-2'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
          />

          <button className='bg-black text-white px-4 py-2 text-2xl rounded' >Add Task</button>
        </form>
        <hr />

        <div className="bg-slate-500 p-5">
          <ul>{renderTask}</ul>

        </div>

    </div>
  )
}

export default page