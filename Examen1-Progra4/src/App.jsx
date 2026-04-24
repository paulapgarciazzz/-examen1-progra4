import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './components/Home';
import CarsParts from './components/CarParts';
import './App.css'

function App() {
  

  return (
    <>
      <section id="center">
      <Home />
      </section>

      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
