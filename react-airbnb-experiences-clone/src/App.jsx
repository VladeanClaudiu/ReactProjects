import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import cardData from '../data/data'

function App() {
  const card = cardData.map((card) => {
    return <Card 
            openSpots = {card.openSpots}
            title = {card.title}
            image = {card.coverImg}
            rating = {card.stats.rating}
            reviewCount = {card.stats.reviewCount}
            location = {card.location}
            price = {card.price}
            />
  });
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <section className='cards-section'>
      {card}
     </section>
     
  
    </div>
  )
}
//  <Card
//        openSpots = {0}
//        image = "katie-zaferes.png"
//        rating = {4.9}
//        reviewCount = {6}
//        location = "USA"
//        title = "Life Lessons with Katie Zaferes"
//        price = "136"

//      /> 
export default App
