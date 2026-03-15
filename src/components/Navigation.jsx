import React, { useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'


const Navigation = () => {
    const navItems = ["Races", "Team", "Cars", "Shop", "My Paddock", "Newsletter"]
    
    const [IsOpen, setIsOpen] = useState(false)
    const [scrollDone, setscrollDone] = useState(false)

    useEffect(() => {
        const changeNav =() =>{
            if(window.scrollY>50){
                setscrollDone(true);
            } else{
                setscrollDone(false);
            }
        }
        
        
    
        window.addEventListener("scroll",changeNav)
        
        return () =>  window.removeEventListener("scroll",changeNav);
    }, [])
    
    

  return (
    <>
     <div class="h-20 w-full bg-transparent absolute flex items-center justify-between px-4 md:px-8">
        <img class="w-20 h-20 md:w-20 md:h-20 md:scale-140" src="src\assets\Redlogo.png" alt="Companylogo" />
    
        <div class="flex items-center gap-2 md:gap-4">
            <div class="hidden lg:flex justify-between items-center gap-8 mr-10">{navItems.map((item) => (
                <a key={item} class="text-white font-bold text-[1.2rem] hover:border-b-3 py-2 border-red-500 transition-colors duration-300  cursor-pointer">{item}</a>))}
            </div>
            <div class="bg-white/10 backdrop-blur-lg w-10 h-10 rounded-full flex justify-center items-center">
                <i class="ri-search-2-line text-white"></i>
            </div>
            <div class="bg-white/10 backdrop-blur-lg px-4 h-10 rounded-3xl flex justify-around items-center text-white cursor-pointer gap-2">
                <i class="ri-menu-line"></i>
                <h1 class="font-bold text-[1rem] md:text-[1.1rem]">Menu</h1>
            </div>            
        </div>

       
        
     </div>    
    </> 
  )
}

export default Navigation

