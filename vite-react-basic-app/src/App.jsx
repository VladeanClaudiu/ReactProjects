import { useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode=> !prevMode)
  }
  if(darkMode){
    document.body.style = 'background-color: #282D35'
  }else{
    document.body.style = 'background-color: white'
  }

  return (
    <div className="App">
      <NavBar 
        darkMode = {darkMode}
        toggleMode = {toggleDarkMode}
      />
      <Main 
        darkMode = {darkMode}
        toggleMode = {toggleDarkMode}
      />
    </div>
  )
}

export default App


//bookmark