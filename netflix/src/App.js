import React from 'react'
import NavBar from './Componetns/Navbar/NavBar'
import "./App.css"
import Banner from './Componetns/Banner/Banner'
import Rowpost from './Componetns/Rowpost/Rowpost'
import {originals,action,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'

function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action Movies' isSmall/>
    <Rowpost url={ComedyMovies} title='Comedy Movies' isSmall/>
    <Rowpost url={HorrorMovies} title='Horror Movies' isSmall/>
    <Rowpost url={RomanceMovies} title='Romance Movies' isSmall/>
    </div>
  )
}

export default App
