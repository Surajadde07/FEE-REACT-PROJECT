import React from 'react'
import pr1 from "../assets/promo-1.png"
import pr2 from "../assets/promo-2.png"
import pr3 from "../assets/promo-3.png"
import pr4 from "../assets/promo-4.png"
import pr5 from "../assets/promo-5.png"
import pr6 from "../assets/promo-6.png"

const Fourth = () => {
    return (
        <div id='gallery' className='w-screen h-[800px] flex flex-col justify-around items-center bg-[#ebebeb]'>
            <div>
                <h1 className='font-oswald text-[#606060] text-4xl'>FIND A TOUR BY BEAUTIFUL TRIPS</h1>
            </div>
            <div className='w-screen grid grid-cols-3 grid-rows-2 sm:grid-cols-2  sm:grid-rows-2 gap-x-2 gap-y-1  place-items-center'>
                <div className='w-[455px] sm:hidden h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr1} alt="" className='w-full h-full absolute object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-1</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
                <div className='w-[455px] sm:w-[100%] h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr2} alt="" className='w-full h-full absolute  object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-2</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
                <div className='w-[455px] sm:w-[100%] h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr3} alt="" className='w-full h-full absolute object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-3</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
                <div className='w-[455px] sm:hidden h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr4} alt="" className='w-full h-full absolute  object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-4</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
                <div className='w-[455px] sm:w-[100%] h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr5} alt="" className='w-full h-full absolute  object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-5</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
                <div className='w-[455px] sm:w-[100%] h-[310px] text-white z-50 relative flex flex-col justify-center items-center text-center'>
                    <img src={pr6} alt="" className='w-full h-full absolute  object-cover object-center'/>
                    <h1 className='text-2xl font-bold z-10'>PROMOTIONAL TRIP-6</h1>
                    <p className='z-10'>Orlando, Air/3 Nights</p>
                </div>
            </div>
        </div>
    )
}

export default Fourth
