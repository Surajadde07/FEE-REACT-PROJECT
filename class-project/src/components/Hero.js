import React from 'react'
import search from "../assets/search_icon.png"
import plane from "../assets/airplane_icon.png"
import bed from "../assets/bed_icon.png"
import month from "../assets/month_icon.png"


const Hero = () => {
    return (
        <div className='w-screen h-[572px] flex items-center justify-center gap-3'>
            <div className='text-center text-white h-full flex flex-col justify-around gap-10 items-center w-[50%]'>
                <div>
                    <h1 className='text-[52px] text-white font-oswald'>WHEN YOUR JOURNEY BEGINS.</h1>
                    <p>Discover your next great adventure, <br /> become an explorer to get starte</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione id beatae provident blanditiis vero.</p>
                </div>
            </div>
            <div className='bg-white w-[350px] h-[450px] flex flex-col justify-center items-center text-[#606060] text-center gap-3 sm:hidden'>
                <div className='text-center'>
                    <h1 className='text-4xl font-oswald text-[#606060]'>SEARCH TOURS</h1>
                    <p className='text-sm'>Find your dream tour today</p>
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-3'>
                    <div className='flex flex-row justify-center items-center w-[290px] bg-[#f2f2f2] h-[45px] px-3 rounded-sm'>
                        <input type="text" placeholder='Search Tour' className='placeholder:text-[#606060] outline-none w-full h-full bg-[#f2f2f2]'/>
                        <img src={search} alt="" className='w-[20px] h-[18px]'/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-[290px] bg-[#f2f2f2] h-[45px] px-3 rounded-sm'>
                        <input type="text" placeholder='Destination' className='placeholder:text-[#606060] outline-none w-full h-full bg-[#f2f2f2]'/>
                        <img src={plane} alt="" className='w-[20px] h-[18px]'/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-[290px] bg-[#f2f2f2] h-[45px] px-3 rounded-sm'>
                        <input type="text" placeholder='Tour Type' className='placeholder:text-[#606060] outline-none w-full h-full bg-[#f2f2f2]'/>
                        <img src={bed} alt="" className='w-[20px] h-[18px]'/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-[290px] bg-[#f2f2f2] h-[45px] px-3 rounded-sm '>
                        <input type="text" placeholder='Month' className='outline-none w-full h-full bg-[#f2f2f2] placeholder:text-[#606060]'/>    
                        <img src={month} alt="" className='w-[20px] h-[18px]'/>
                    </div>
                </div>
                <button className=' bg-blue-600 hover:bg-blue-500 duration-200 text-center text-white w-[290px] py-3 rounded-md'>
                    FIND TOURS
                </button>
            </div>
        </div>
    )
}

export default Hero
