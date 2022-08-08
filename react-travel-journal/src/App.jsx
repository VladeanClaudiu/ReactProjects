import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import data from '../data/data'

function App() {
  const mappedData = data.map((location) => {
    return <Location
      key = {location.key}
      location = {location}
    />

  })
  return (
    <div>
      <Navbar />
      <section>
        {mappedData}
      </section>
    </div>
  )
}

export default App
