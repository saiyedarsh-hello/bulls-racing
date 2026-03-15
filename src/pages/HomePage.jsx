import React from 'react'
import Photo1 from '../assets/oracle-red-bull-racing-australian-grand-prix-2026.jpg'
import Photo2 from '../assets/poster.jpg'
import Photo3 from '../assets/poster.jpg'
import Photo4 from '../assets/poster2.jpg'

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen py-0 w-full bg-[#00162B] flex flex-col md:flex-row items-center justify-center md:items-center text-white pt-20 px-4 md:px-10 gap-6">
        <div className="w-full max-w-[90%] md:max-w-none md:flex-[1.4] aspect-4/5 md:aspect-16/10 rounded-2xl overflow-hidden relative">
        <img className="h-full w-full object-cover brightness-70" src={Photo1} alt="Maxpix" />
        <h2 className="m-4 md:m-6 text-white absolute bottom-26 md:bottom-14 left-0 p-4 font-bold text-xl md:text-2xl w-[90%] md:w-130 leading-snug">Max gives us his thoughts after finishing 6th in Australia</h2>
        <p className="m-4 md:m-6 text-white absolute bottom-0 md:bottom-2 left-0 p-4 w-[95%] md:w-140 text-sm md:text-base">"It was a decent comeback from P20 and we will work as a Team to close the gap..."</p>
      </div>
      <h2 className="w-[90%] font-bold mt-8 mb-6 text-[1.1rem] text-left md:hidden">Featured</h2>
      
      
      {/* side boxes */}
      <div className="w-full max-w-[90%] md:max-w-none md:flex-1 flex flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className='hidden md:flex md:flex-col md:justify-start md:items-start w-full'>
            <div className="w-full aspect-2.3/1 rounded-2xl overflow-hidden relative">
            <img className='h-full w-full object-cover' src={Photo2} alt="poster1"/>
            <h2 className='text-white absolute bottom-10 md:bottom-8 left-0 p-3 font-bold md:m-1 md:mb-5 md:text-2xl w-[90%] md:w-auto'>Win the Ultimate Oracle Red Bull Sim Racing Bundle</h2>
            <p className='text-white absolute bottom-0 left-0 font-light text-[0.9rem] bg-black/30 w-full p-3 md:p-3'>Ready to Race? Enter now to win!</p>
          </div>
          </div>
          <div className='flex gap-4 md:gap-6 pb-6 md:pb-0 h-auto w-max md:w-full'>
          <div className="w-[80vw] md:w-full md:flex-1 aspect-4/3.5 rounded-2xl overflow-hidden relative">
            <img className='h-full w-full object-cover brightness-65' src={Photo3} alt="poster1" />
            <h2 className='text-white absolute bottom-10 left-0 p-3 font-bold w-[90%] md:w-auto'>Win the Ultimate Oracle Red Bull Sim Racing Bundle</h2>
            <p className='text-white absolute bottom-0 left-0 font-light text-[0.9rem] bg-black/30 w-full p-3'>Ready to Race? Enter now to win!</p>
          </div>
          <div className="w-[80vw] md:w-full md:flex-1 aspect-4/3.5 rounded-2xl overflow-hidden relative">
            <img className='h-full w-full object-cover brightness-65' src={Photo4} alt="poster1" />
            <h2 className='text-white font-bold w-[90%] md:w-70 absolute bottom-12 left-0 p-3'>2026. New Rules. Same Max.</h2>
            <p className='text-white absolute bottom-0 left-0 font-light text-[0.8rem] md:text-[0.7rem] bg-black/30 w-full md:w-70 p-3'>71 wins, 48 pole positions 127 podiums and, of course, four F1 World Drivers' ...</p>
          </div>
        </div>
      </div>
    </div>
      

    
    
    
    
    
    </>
  )
}

export default HomePage