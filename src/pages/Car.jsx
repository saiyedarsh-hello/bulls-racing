import React, { useState } from 'react'

const RB22 = '/rb22.webp'
const RB21 = '/rb21.webp'
const RB20 = '/rb20.webp'


const Car = () => {

  const cars = [
    { key: 1, name: "RB22", image: RB22, drivers: ["Max Verstappen", "Isack Hajdar"], wins: 0, podiums: 0 },
    { key: 2, name: "RB21", image: RB21, drivers: ["Max Verstappen", "Sergio Perez"],  wins: 12, podiums: 22 },
    { key: 3, name: "RB20", image: RB20, drivers: ["Max Verstappen", "Sergio Perez"],  wins: 21, podiums: 30 }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleUp = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length)
  }

  const handleDown = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length)
  }

  const activeCar = cars[currentIndex]
  const nameLetters = activeCar.name.replace(/[0-9]/g, '')
  const nameNumbers = activeCar.name.replace(/[^0-9]/g, '')

  return (
    <div className='h-250 md:h-220 bg-[#00162B] flex flex-col gap-2 overflow-hidden'>
      <h1 className='text-white m-auto md:absolute text-3xl font-extrabold md:m-5 md:ml-10'>Our Cars</h1>

      <button
        onClick={handleUp}
        className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition m-auto'>
        <i className="ri-arrow-up-long-line text-white text-xl"></i>
      </button>

    
      <div className='flex flex-col md:flex-row items-center px-6 gap-6 w-full flex-1 min-h-0'>

        <div className='relative flex-1 h-full flex flex-col justify-center overflow-hidden md:border-0 border border-white/20 rounded-xl'>
          <h1 className='absolute text-[30vw] md:text-[25vw] mb-20 md:mb-40 font-extrabold select-none pointer-events-none'>
            <span className='text-white'>{nameLetters}</span>
            <span className='text-[#E8002D]'>{nameNumbers}</span>
          </h1>
          <img className='relative w-250' src={activeCar.image} alt={activeCar.name} />
        </div>

        <div className='bg-[#0a1e35] rounded-xl p-6 w-56 flex flex-col gap-5 shrink-0 self-center border border-white/20'>
      
          <div>
            <p className='text-gray-400 text-sm mb-1'>Drivers</p>
            {activeCar.drivers.map((driver, i) => (
              <p key={i} className='text-white text-xl font-extrabold leading-tight'>{driver}</p>
            ))}
          </div>

          <hr className='border-white/20' />   
          <div className='flex flex-row gap-6'>
            <div className='flex-1'>
              <p className='text-gray-400 text-sm mb-1'>Wins</p>
              <p className='text-white text-2xl font-extrabold'>{activeCar.wins}</p>
            </div>
            <div className='w-px bg-white/20'></div>
            <div className='flex-1'>
              <p className='text-gray-400 text-sm mb-1'>Podiums</p>
              <p className='text-white text-2xl font-extrabold'>{activeCar.podiums}</p>
            </div>
          </div>
        </div>

      </div>

      <button
        onClick={handleDown}
        className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition m-auto'>
        <i className="ri-arrow-down-long-line text-white text-xl"></i>
      </button>

    </div>
  )
}

export default Car
