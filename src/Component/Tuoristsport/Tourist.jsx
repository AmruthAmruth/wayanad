import React from 'react'
import './Tourist.css'
import banasura from '../../img/banasura.jpg'
import chembra from '../../img/chembra.jpg'
import kuruva from '../../img/kuruva.jpg'
import pookod from '../../img/pookod.jpg'


function Tourist() {
  return (
    <div className='tourist'>
      <h1>Tourist Spots In <span>Wayanad</span></h1>
      <div className="sport">
        <h4>Banasura Sagar Dam</h4>
        <div className="teim">
          <img src={banasura} alt="" />
          <p>Banasura Sagar dam across the Karamanathodu River, a tributary of River Kabini, in Kalpetta,
             wayanad is considered to be the largest earth dam in India and the second largest in Asia. 
             The dam attraction is ideally placed in the foothills of Banasura hills, which got its name
              from ‘Banasura’, the son of King Mahabali, the famous ruler of Kerala. It is said that 
              ‘Banasura’ undertook severe penance on the top of the hills. Banasura hill is the third 
              largest peak in the Western Ghats <br />
              <button> <a href="https://www.youtube.com/watch?v=46Em6m_j0fQ"> View More </a></button>
              </p>  
        </div>


        <h4>Cheambra Peak</h4>
        <div className="teim">
          <img src={chembra} alt="" />
          <p>If you are an admirer of soothing natural beauty and if you love to have an adventure trip, then Chembra Peak in Wayanad, will be a perfect stop for you. Eight kilometer south of Kalpetta, near to the town of Meppady, lays the highest peak in Wayanad, the Chembra Peak (2,100 m). Chembra peak adjoins Nilgiri hills in Tamil Nadu and Vallarimala in Kozhikode. <br />
          <button> <a href="#"> View More </a></button>
              </p>  
        </div>



        <h4>Kuruva Island</h4>
        <div className="teim">
          <img src={kuruva} alt="" />
          <p>Kuruva Dweep or Kuruva Island is a protected river delta, comprising a cluster of islands over the middle of Kabini River in Wayanad. Spread over 950 acres of land, Kuruva Island is densely populated with rich flora and fauna. The geographical peculiarity of this island makes this place evergreen with a serene ambience. <br />
          <button> <a href="#"> View More </a></button>
              </p>  
        </div>



        <h4>Pookod lake</h4>
        <div className="teim">
          <img src={pookod} alt="" />
          <p>
The beautiful freshwater lake in Wayanad, Pookode Lake lays 15 kilometre away from Kalpetta. Nestled between evergreen forest and Western Ghats, the lake is spread over 13 acre and is 40 m deep. This is one of the most preferred tourist destinations in Wayanad.While reaching at this gorgeous lake, you will be experiencing a calm and peaceful environment for tourist<br />
<button> <a href="https://www.youtube.com/watch?v=iS-A8ZhNnN0"> View More </a></button>
              </p>  
        </div>




        


      </div>
    </div>
  )
}

export default Tourist
