import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'

function App() {

  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Card
       available = {true}
       image = "../src/assets/images/katie-zaferes.png"
       stars = {4.9}
       rating = {6}
       location = "USA"
       title = "Life Lessons with Katie Zaferes"
       price = "136"

     />
     <Card
       available =  {false}
       image = "../src/assets/images/katie-zaferes.png"
       stars = {4.9}
       rating = {6}
       location = "USA"
       title = "Life Lessons with Katie Zaferes"
       price = "136"

     />

      <Card
       image = "../src/assets/images/katie-zaferes.png"
       stars = {4.9}
       rating = {6}
       location = "USA"
       title = "Life Lessons with Katie Zaferes"
       price = "136"

     />
    </div>
  )
}

export default App
