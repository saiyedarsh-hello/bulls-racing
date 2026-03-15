import React, { useRef } from 'react'


const Shop = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
            }
        }
    };

    const products = [
        {id:1 , name:"New Era 9Seventy Max Replica Cap" , price:"€47.95" , image:"src\\assets\\New-Era-9Seventy-Max-Verstappen-Replica-Cap.avif"},
        {id:2 , name:"New Era 9Forty Replica Open Back Cap" , price:"€46.95" , image:"src\\assets\\New-Era-9Forty-Replica-Women-s-Open-Back-Cap.avif"},
        {id:3 , name:"New Era 9Seventy Isack Replica Cap" , price:"€47.95" , image:"src\\assets\\New-Era-9Seventy-Isack-Hadjar-Replica-Cap.avif"},
        {id:4 , name:"New Era Max Verstappen Replica Beanie RACING", price:"€36.95",image:"src\\assets\\New-Era-Max-Verstappen-Replica-Beanie.avif"},
        {id:5 , name:"Replica T-shirt" , price:"€77.95" , image:"src\\assets\\Replica-T-Shirt.avif"},
        {id:6 , name:"Replica T-shirt" , price:"€77.95" , image:"src\\assets\\Replica-T-Shirt girl.avif"},
        {id:7 , name:"Replica Polo" , price:"€93.95" , image:"src\\assets\\Replica-Polo girl.avif"},
        {id:8 , name:"Replica zip Hoddie" , price:"€104.95" , image:"src\\assets\\Replica-Zip-Hoodie.avif"}
    ]

  return (
    <div className='bg-[#00162B] w-full h-160'>
      <h1 className='text-white text-2xl font-bold p-5 md:text-4xl md:px-20'>New Season. New Energy. New Kit.</h1>
      <div className='hidden md:flex md:justify-end mr-10 md:gap-2'>
        <i onClick={() => scroll('left')} className="ri-arrow-left-line text-white text-2xl bg-[#253f56] p-2 px-3 rounded-full cursor-pointer hover:bg-[#355f86] transition"></i>
        <i onClick={() => scroll('right')} className="ri-arrow-right-line text-white text-2xl bg-[#253f56] p-2 px-3 rounded-full cursor-pointer hover:bg-[#355f86] transition"></i>
      </div>
      <div ref={scrollRef} style={{ scrollbarWidth: 'none' }} className='h-100 md:h-120 m-5 md:ml-20 flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x snap-mandatory'>
          {products.map((item) => (
            <div key={item.id} className='relative h-full shrink-0 w-68 md:h-110 md:w-80 m-3 rounded-[20px] overflow-hidden snap-center group'>
              <img src={item.image} alt={item.name} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-95' />
              <div className='absolute inset-0 bg-linear-to-t from-[#2f353d] via-[#2f353d]/20 to-transparent flex flex-col justify-end p-6'>
                <h2 className='text-white text-xl md:text-2xl font-bold leading-tight mb-4 drop-shadow-md'>{item.name}</h2>
                <p className='text-white font-bold text-lg drop-shadow-lg'>{item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Shop