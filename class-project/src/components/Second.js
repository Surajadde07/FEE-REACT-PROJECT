import React from 'react'
import circle_1 from "../assets/circle-1.png"
import circle_2 from "../assets/circle-2.png"
import circle_3 from "../assets/circle-3.png"
import circle_4 from "../assets/circle-4.png"
import bg from "../assets/sec-2_bg.png"

const Second = () => {
    return (
        <div id='blog' className='w-screen h-[600px] relative flex flex-col justify-center items-center text-center text-[#606060] gap-10'>
            <img src={bg} alt="" className='absolute w-screen h-full -z-10'/>
            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='font-oswald text-5xl '>FIND A TOUR BY TOUR TYPE</h1>
                <p className='text-sm'>Egestas dignissim a enim lorem a mus egestas risus porta? Sed. Scelerisque, in nec velit augue aenean <br /> a, vut velit nec.l Phasellus aliquam odio.</p>
            </div>
            <div className='flex relative gap-7'>
                <div className='relative w-[270px] h-[270px] flex justify-center items-center sm:hidden'>
                    <img src={circle_1} alt="" className='absolute -z-10' />
                    <p className="font-oswald text-white text-3xl">NORTH AMERICA</p>
                </div>
                <div className='relative w-[270px] h-[270px] flex justify-center items-center sm:hidden'>
                    <img src={circle_2} alt="" className='absolute -z-10'/>
                    <p className="font-oswald text-white text-3xl">SWITZERLAND</p>
                </div>
                <div className='relative w-[270px] h-[270px] flex justify-center items-center'>
                    <img src={circle_3} alt="" className='absolute -z-10'/>
                    <p className="font-oswald text-white text-3xl">SAN FRANCISO</p>
                </div>
                <div className='relative w-[270px] h-[270px] flex justify-center items-center sm:hidden'>
                    <img src={circle_4} alt="" className='absolute -z-10'/>
                    <p className="font-oswald text-white text-3xl">AMAZON CRUISE</p>
                </div>
            </div>
        </div>
    )
}

export default Second
