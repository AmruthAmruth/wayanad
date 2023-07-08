import React from 'react'
import elephant from '../../img/elephant.png'
import land from '../../img/land.jpg'
import tourism from '../../img/tourism1.jpg'
import recrational from '../../img/recrational.jpg'
import plgrim from '../../img/plgrim.jpg'
import historic from '../../img/historic.jpg'
import './Hero.css'
function Hero() {
  return (
    <div className='home'>
      <h1>Welcome To <span>Wayanad</span>, Kerala, India</h1>
      <div className='imge'>
        <img src={elephant} alt="" />
        <p>
        Wayanad, the green paradise is nestled among the mountains of the Western Ghats, 
         forming the border world of the greener part of Kerala. Clean and pristine,
          enchanting and hypnotizing, this land is filled with history and culture.
           Located at a distance of 76 km. from the sea shores of Kozhikode, this verdant
            hill station is full of plantations, forests and wildlife.
        </p>
      </div>
      <h1>About <span> Wayanad</span></h1>
      <div className="imge">
        <p>
        Regarding geographical location, Wayanad district stands on the southern top of the
         Deccan plateau and its chief glory is the majestic Western Ghats with lofty ridges
          and rugged terrain interspersed with dense forest, tangled jungles and deep valleys.
           The place also enjoys a strategic location as the leading tourist centres of South
            India like Ooty, Mysore, Bangalore, Coorg and Kannur are situated around this region.
        </p>
        <img src={land} alt="" />
      </div>

      <h1>Tourism <span> Wayanad</span></h1>
        
      <div className="tourism">
          <p> <h4>Adventure Tourism In Wayanad</h4> The natural scenic beauty of Wayanad and its rich natural resources offer several
             opportunities for adventure tourism. The hills rocks and valley which make the very
              unique character of Wayanad provide a lot for catering to the ever increasing demand
               for adventure tourist.Trekking to the Chembra peak is one of the risky tourist endeavours.
                Chembra peak is the highest peak in Wayanad at 2100m. above mean sea level. It is14 kms.
                 west of Kalpetta. Trekking to the top of this peak takes almost a day.....</p>
                 <img src={tourism} alt="" />
      </div>

      <div className="tourism">
     
          <p> <h4>Recrational Tourism In Wayanad</h4> The mist – capped mountains, valleys with 
          green meadows, white water springs, blue water lakes and wild forests makes Wayanad in
           Kerala a perfect destination for recreational tourism.
Come to Wayanad to relax and rejuvenate your mind, body and soul. The following destinations at 
Wayand are noted to be the best places for doing recreational activities. Boating Facilities can be arranged..</p>      
<img src={recrational} alt="" />
      </div>

      <div className="tourism">
          <p> <h4>Pilgrim Tourism In Wayanad</h4> Historically and culturally the importance of Wayanad 
          lies very closely linked with its temples. Thirunelly temple, Jain temples at Sulthan Bahery 
          and Panamaram and Valliyoorkav at Mananthavady historically date back from 12th to 16th 
          centuries and the temples show that Wayanad was a habitat of mankind and place of civilization 
          even in very old times. These temples are the living testimony of the cultural heritage of Wayanad.
           D.T.P.C arranges conducted tour to these centres.</p>
                 <img src={plgrim} alt="" />
      </div>

      <div className="tourism">
      
          <p> <h4>Historic Tourism In Wayanad</h4> The Edakkal Caves are at Ambukutty Mala. It is a
           pre-historic rock shelter formed naturally out of a strange disposition of three huge boulders
            making one to rest on the other two with its bottom jutting out in between and serving as the
             roof. Edakkal literally means a stone in between.The discovery of the cave and its identification
              as a prehistoric site were quite accidental by F. Fawcett, the then superintendent of police.
               An enthusiast in pre-history, Fawcett went around exploring the Wayanad</p>      
               <img src={historic} alt="" />
      </div>

    </div>
  )
}

export default Hero
