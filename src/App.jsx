//import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import CodingProjects from './components/Coding-Projects.jsx';
import Music from './components/Music.jsx';
import Contact from './components/Contact.jsx';
import Leadership from './components/Leadership.jsx';
import arrangements from "./components/ArrangementsData.jsx";

export default function App() {

  return (
   <div>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Coding-Projects" element={<CodingProjects />}/>
      <Route path="/Music" element={<Music />} arrangements={arrangements}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Leadership" element={<Leadership />}/>
    </Routes>
   </div>
  );
}

