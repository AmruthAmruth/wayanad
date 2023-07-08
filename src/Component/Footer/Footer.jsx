import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
     <div className="element">
        <h1>Wayanad</h1>
        <ul>
            <a href="/">Home</a>
            <a href="/resort">Resort</a>
            <a href="/touristsport">Tourist Sport</a>
            <a href="/wildlife">Wild Life</a>
            <a href="/gallary">Gallary</a>
        </ul>
   
   <div className='social'>
    <p>Follow on Social Media.</p>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-linkedin"></i>
   </div>
        
     </div>
    </div>
  )
}

export default Footer
