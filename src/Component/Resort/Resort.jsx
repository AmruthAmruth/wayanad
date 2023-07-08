import React from 'react'
import r1 from '../../img/r1.jpg'
import r2 from '../../img/r2.jpg'
import r3 from '../../img/r3.jpg'
import r4 from '../../img/r4.jpg'
import r5 from '../../img/r5.jpg'
import r6 from '../../img/r6.jpg'
import './Resort.css'
function Resort() {
  return (
    <div className='resort'>
      <h1>Resort in <span>Wayanad</span></h1>
     <div className="row">
      
     <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r3} alt="" />
           <p >Morickap Resort <br />
           <a href="https://morickapresort.com/" >Visit Website</a>
           </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r2} alt="" />
           <p >Kuruva Island Resort <br />
           <a href="https://www.kuruvaislandresort.com/" >Visit Website</a>
           </p>
        </div>
      </div>


      <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r4} alt="" />
           <p >Chembarathi Wayanad <br />
           <a href="https://www.chembarathi.com/" >Visit Website</a>
           </p>
        </div>
      </div>


      <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r1} alt="" />
           <p >Agraharam Resort <br />
           <a href="http://www.agraharamresorts.com/index.html" >Visit Website</a>
           </p>
        </div>
      </div>


      <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r5} alt="" />
           <p >Arayal Resort <br />
           <a href="https://arayalresorts.com/" >Visit Website</a>
           </p>
        </div>
      </div>

      <div className="col-md-6 col-sm-12">
        <div className="continer">
           <img src={r6} alt="" />
           <p >Marmalade Springs <br />
           <a href="https://www.marmaladesprings.com/index.html" >Visit Website</a>
           </p>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Resort
