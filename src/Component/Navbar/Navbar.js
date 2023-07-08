import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" id='heading'>Wayanad</a>
  <button id='nav-btn' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto" id='nav-ul'>
      <li class="nav-item active" >
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/resort">Resort </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/touristsport">Tourist Sport </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/wildlife">Wild Life</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/gallary">Galary </a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar
