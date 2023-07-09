import React, { useState } from 'react';
import './App.css';

function App() {
  
const [todos, setTodos] = useState([])
const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." onChange={(e)=>setTodo(e.target.value)} />
        <i className="fas fa-plus" onClick={()=>setTodos(todo)}></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{todos}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
