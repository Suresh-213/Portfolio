import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Port from './contents/Port'
import Home from './contents/Home';
import About from './contents/About';
import Skils from './contents/Skils';
import Project from './contents/Project';
import Contact from './contents/Contact';





function App() {




  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Port />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skils />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </Router>



    </>
  )
}

export default App
