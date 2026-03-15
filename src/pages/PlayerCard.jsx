import React from 'react'
import bgImage from '../../public/image.png'

const PlayerCard = () => {
  return (
    <div className='bg-[#00162B] w-full py-10 md:py-20 flex justify-center items-center'>
      <div 
        className='h-180 w-full md:w-[90%] lg:w-[80%] md:rounded-3xl bg-cover bg-center bg-no-repeat' 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
            <img src="" alt="" srcset="" />
            <img src="" alt="" srcset="" />
        </div>



      </div>
    </div>
  )
}

export default PlayerCard