import React, { useState } from 'react'

function TodoForm({addtodo}) {
    const [value, setValue] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addtodo(value)
        setValue("")
    }
  return (
    <form action="" className='TodoForm' onSubmit={handleSubmit} >
        <input type="text" 
        className='todo-input'
         placeholder='What is the task today..'
         onChange={(e)=>setValue(e.target.value)}
         value={value}
         />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
