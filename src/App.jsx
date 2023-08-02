import { useState } from 'react'
import './App.css'
import Maincontent from './MainContent'


function App() {
  const moon = document.querySelector('.sun')

  const darkMode = () => {
    if(window.innerWidth < 920) {
    document.querySelector('.moon').style.display = "block"
    document.querySelector('.sun').style.display = "none"
    document.querySelector('.background').style.backgroundImage = "url(/bg-mobile-dark.jpg)"
    document.body.style.backgroundColor = "#171823"
    document.querySelector('.selection').style.boxShadow = "none"
    document.querySelector('.selection').style.backgroundColor = "#25273D"
    document.querySelector('.selection').style.color = "#9495A5"
    document.querySelector('.textarea-div').style.backgroundColor = "#25273D"
    document.querySelector('.div-for-ul').style.backgroundColor = "#25273D"
    document.querySelector('.div-for-ul').style.color = "white"
    document.querySelector('.div-for-ul').style.boxShadow = "none"
    document.querySelector('.items-left').style.boxShadow = "none"
    document.querySelector('button').style.color = "#5B5E7E"
    document.querySelector('.items-left').style.color = "#5B5E7E"
    document.querySelector('.write').style.color = "white"
    } else if (window.innerWidth >= 920) {
      document.querySelector('.moon').style.display = "block"
      document.querySelector('.sun').style.display = "none"
      document.querySelector('.background').style.backgroundImage = "url(/bg-desktop-dark.jpg)"
      document.body.style.backgroundColor = "#171823"
    document.querySelector('.selection').style.boxShadow = "none"
    document.querySelector('.selection').style.backgroundColor = "#25273D"
    document.querySelector('.selection').style.color = "#9495A5"
    document.querySelector('.textarea-div').style.backgroundColor = "#25273D"
    document.querySelector('.div-for-ul').style.backgroundColor = "#25273D"
    document.querySelector('.div-for-ul').style.color = "white"
    document.querySelector('.div-for-ul').style.boxShadow = "none"
    document.querySelector('.items-left').style.boxShadow = "none"
    document.querySelector('button').style.color = "#5B5E7E"
    document.querySelector('.items-left').style.color = "#5B5E7E"
    document.querySelector('.write').style.color = "white"
    }
  }

  const lightMode = () => {
    if(window.innerWidth < 920) {
    document.querySelector('.moon').style.display = "none"
    document.querySelector('.sun').style.display = "block"
    document.querySelector('.background').style.backgroundImage = "url(/bg-mobile-light.jpg)"
    document.body.style.backgroundColor = "white"
    document.querySelector('.selection').style.boxShadow = "0px 35px 50px -15px #C2C3D680"
    document.querySelector('.selection').style.backgroundColor = "white"
    document.querySelector('.selection').style.color = "#9495A5"
    document.querySelector('.textarea-div').style.backgroundColor = "white"
    document.querySelector('.div-for-ul').style.backgroundColor = "white"
    document.querySelector('.div-for-ul').style.color = "black"
    document.querySelector('.div-for-ul').style.boxShadow = " 0px 35px 50px -15px #C2C3D680"
    document.querySelector('.items-left').style.boxShadow = "none"
    document.querySelector('button').style.color = "#5B5E7E"
    document.querySelector('.items-left').style.color = "#5B5E7E"
    document.querySelector('.write').style.color = "black"
    } else if (window.innerWidth >= 920) {
      document.querySelector('.moon').style.display = "none"
    document.querySelector('.sun').style.display = "block"
      document.querySelector('.background').style.backgroundImage = "url(/bg-desktop-light.jpg)"
      document.body.style.backgroundColor = "white"
    document.querySelector('.selection').style.boxShadow = "0px 35px 50px -15px #C2C3D680"
    document.querySelector('.selection').style.backgroundColor = "white"
    document.querySelector('.selection').style.color = "#9495A5"
    document.querySelector('.textarea-div').style.backgroundColor = "white"
    document.querySelector('.div-for-ul').style.backgroundColor = "white"
    document.querySelector('.div-for-ul').style.color = "black"
    document.querySelector('.div-for-ul').style.boxShadow = " 0px 35px 50px -15px #C2C3D680"
    document.querySelector('.items-left').style.boxShadow = "none"
    document.querySelector('button').style.color = "#5B5E7E"
    document.querySelector('.items-left').style.color = "#5B5E7E"
    document.querySelector('.write').style.color = "black"
    }
  }

  return (
    <>
      <div className="background">
        <div className='starting-div'><p className='logo'>TODO</p> 
        <img onClick={lightMode} className='moon' src="./icon-sun.svg" alt="" />
        <img onClick={darkMode} className='sun' src="./icon-moon.svg" alt="" />  </div>
      </div>
     <Maincontent/>
    </>
  )
}

export default App
