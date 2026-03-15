import React from 'react'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import Raceinfo from './pages/Raceinfo'
import Shop from './pages/Shop'
import PlayerCard from './pages/PlayerCard'
import Car from './pages/Car'


const App = () => {
  return (
    <div>
      <Navigation/>
      <HomePage/>
      <Raceinfo/>   
      <Shop/>
      <Car/>
    </div>
  )
}

export default App