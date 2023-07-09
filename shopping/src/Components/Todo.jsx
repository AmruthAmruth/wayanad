import React from 'react'

function Todo({task,toggleComplete , deleteTodo,editTodo}) {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
      <div>
      <i class="fa-sharp fa-solid fa-pen-to-square" onClick={()=>editTodo}></i>
      <i class="fa-solid fa-trash" onClick={()=>deleteTodo(task.id)}></i>
      </div>
    </div>
  )
}

export default Todo
