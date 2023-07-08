import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Resortpage from './Pages/Resortpage';
import Tribalpage from './Pages/Gallarypage';
import Touristsportpage from './Pages/Touristsportpage'
import Wilflifepage from './Pages/Wilflifepage';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wayanad" element={<Homepage />} />
          <Route path="/resort" element={<Resortpage />} />
          <Route path="/gallary" element={<Tribalpage />} />
          <Route path="/wildlife" element={<Wilflifepage />} />
          <Route path="/touristsport" element={<Touristsportpage />} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
