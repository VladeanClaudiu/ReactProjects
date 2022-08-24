import { useState } from 'react'
import React from 'react'
import NavBar from './components/Navbar'
import Main from './components/Main'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <NavBar 
        darkMode = {darkMode}
      />
      <Main 
        darkMode = {darkMode}
      />
    </div>
  )
}

export default App


//bookmark