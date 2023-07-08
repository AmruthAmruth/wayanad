import React from 'react'
import './Galary.css'
import g1 from '../../img/g1.jpg'
import g2 from '../../img/g2.jpg'
import g3 from '../../img/g3.jpg'
import g6 from '../../img/g6.jpg'
import g5 from '../../img/g5.jpg'
import g7 from '../../img/g7.jpg'
import g4 from '../../img/g4.jpg'
import g8 from '../../img/g8.jpg'
import g9 from '../../img/g9.jpg'
import g10 from '../../img/g10.jpg'
import g11 from '../../img/g11.jpg'
import g12 from '../../img/g12.jpg'
function Tribals() {
  return (
    <div>
       <h1 className='ga'>Gallery</h1>
      <div class="row" id='galary'>
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" >
    <img
      src={g1}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={g5}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={g9}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={g10}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={g2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g7}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>

  
  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={g3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g8}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={g4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g6}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={g11}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g12}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>

</div>
    </div>
  )
}

export default Tribals
