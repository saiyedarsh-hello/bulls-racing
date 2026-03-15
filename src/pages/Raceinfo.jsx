import React from 'react'
import Chinatrack from '../assets/chinaphoto.jpg'
import companylogo from '../assets/logodk.png'

const Raceinfo = () => {
  return (
    <div className='bg-[#00162B] py-10 md:py-20 w-full flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-10'>
        <div id='driverstanding' className='bg-[#1A2E41] rounded-2xl w-full max-w-[500px] md:flex-1 md:h-80 flex flex-col justify-center items-start p-6 md:p-10'>
            <h1 className='text-2xl md:text-3xl text-white font-bold mb-4 w-full text-left'>2026 Driver Standings</h1>
            <hr className='w-full border-white/20' />
            <div className='flex justify-between w-full py-4'>
              <h1 className='text-xl md:text-2xl text-white font-bold'>06</h1>
              <h1 className='text-white font-bold text-sm md:text-base'>Max Verstappen <br /> <p className='font-light text-[80%]'>Oracle Red Bull Racing</p></h1>
              <h1 className='text-xl md:text-2xl text-white font-bold'>8</h1>
            </div>
            <hr className='w-full border-white/20' />
            <div className='flex justify-between w-full py-4'>
              <h1 className='text-xl md:text-2xl text-white font-bold'>15</h1>
              <h1 className='text-white font-bold text-sm md:text-base'>Isack Hadjar <br /> <p className='font-light text-[80%]'>Oracle Red Bull Racing</p></h1>
              <h1 className='text-xl md:text-2xl text-white font-bold'>0</h1>
            </div>
        </div>
        <div id='upcommingrace' className='w-full max-w-[800px] md:flex-[1.5]'>
          <div className='rounded-2xl overflow-hidden flex flex-col md:flex-row md:h-80'>
            <img className='w-full md:w-1/2 h-48 md:h-full object-cover' src={Chinatrack} alt="Chinese Grand Prix" />
            <div id="timetorace" className='bg-[#1A2E41] flex-[1.5] flex flex-col sm:flex-row justify-between items-center p-6 md:p-10 gap-6'>
                <div className='flex flex-col justify-between h-full py-4 text-center sm:text-left'>
                    <div>
                        <h1 className='text-white font-bold text-3xl md:text-4xl'>Next:</h1>
                        <p className='text-white text-lg md:text-xl mt-2'>Free Practice 1</p>
                    </div>
                    
                    <div className='mt-8'>
                        <img className='h-12 md:h-15 mx-auto sm:mx-0' src={companylogo} alt="logoidk" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-white text-center'>
                    <p className='text-[12px] text-red-600 font-extrabold uppercase tracking-widest mb-1'>March 13</p>
                    <p className='text-[14px] font-bold uppercase mb-2 tracking-tight'>Chinese</p>
                    <div className='flex gap-4 items-baseline'>
                        <div className='flex flex-col items-center'>
                            <span className='text-3xl md:text-4xl font-black leading-none'>0</span>
                            <span className='text-[10px] uppercase font-bold opacity-90 mt-1'>Days</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-3xl md:text-4xl font-black leading-none'>18</span>
                            <span className='text-[10px] uppercase font-bold opacity-90 mt-1'>Hours</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='text-3xl md:text-4xl font-black leading-none'>39</span>
                            <span className='text-[10px] uppercase font-bold opacity-90 mt-1'>Mins</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Raceinfo