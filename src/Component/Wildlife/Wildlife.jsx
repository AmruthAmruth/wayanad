import React from 'react'
import './Wildlife.css'
import g9 from '../../img/g9.jpg'
import g7 from '../../img/g7.jpg'
import wild from '../../img/wild.jpg'
import wild2 from '../../img/wild2.png'
import wild3 from '../../img/wild3.jpg'
import wild4 from '../../img/wild4.jpg'
function Wildlife() {
  return (
    <div className='wildlife'>
      <h1>Wild LIfe In <span>Wayanad</span></h1>
      <p>Wayanad is among the most beloved treasures of God’s Own Country and here it is that its
         eponymous wildlife sanctuary was set up in 1973. These are located in the southern trenches 
         of the famous Western Ghats, ranked 8th in the list of the World’s Biodiversity Hotspots. The
          landscape usually consists of hilly terrains interspersed with dense valleys, which have helped 
          build its reputation as one among the most picturesque natural sites in the whole world.</p>

          <p>This area is renowned with having world's largest recorded population of Asian Elephants
             and Tigers. Both of these species, along with the Vulture, are considered the flagship species 
             of the Sanctuary. To this, we add Leopards, Jungle Cats, Leopard cats, spotted deer, Sambar deer,
              Gaur, Sloth bear, Wild dog, Wild boar, Indian pangolin, Stripe-necked mongoose and plethora of
               other mammals.</p>

               <p>Its location plays a huge role in its importance to the local ecology, as it shares
                 its borders with the other protected areas of Bandipur and Nagarhole Tiger Reserve in
                  North-East side and Mudumalai Tiger Reserve of Tamil Nadu in the south-eastern side. 
                  These offer a natural corridor for the seasonal migration of animals.</p>

                
<div class="row" id='wild'>
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={g7}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={g9}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={wild}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={wild2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={wild3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={wild4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>


    </div>
  )
}

export default Wildlife
