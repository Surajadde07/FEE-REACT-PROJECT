import React from 'react'
import bg from "../assets/sec-3_bg.png"
import first from "../assets/deal-1.png"
import second from "../assets/deal-2.png"
import third from "../assets/deal-3.png"

const Third = () => {
    return (
        <div id='deals' className='w-screen h-[700px] relative sm:h-[1350px] flex flex-col justify-center items-center gap-7'>
            <img src={bg} alt="" className='absolute w-screen h-full -z-10' />
            <div>
                <h1 className='text-4xl font-oswald text-white'>DEALS AND DISCOUNTS</h1>
            </div>
            <div className='flex w-screen justify-center items-center gap-7 sm:flex-col'>
                <div className='relative sm:w-[300px] sm:h-[400px] w-[350px] h-[500px] bg-white flex flex-col text-[#606060] items-center'>
                    <img src={first} alt="" className='w-full h-[50%] object-cover' />
                    <div className='bg-[#47a0ff] w-[150px] text-center flex justify-center items-center h-[40px] rounded-sm text-white font-oswald gap-1 absolute bottom-[47%]'>
                        <p className='text-xl line-through'>$899 </p> <span className='text-2xl line-none'>$499</span>
                    </div>
                    <div className='text-center h-[50%] flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-4xl font-oswald'>SURFING</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta, fugit accusamus, sequi consectetur incidunt corrupti nemo aliquam ad earum quos distinctio, ea mollitia?</p>
                        <button className='w-[180px] bg-blue-600 hover:bg-blue-500 text-center text-white rounded-sm h-[45px]'>BOOK NOW</button>
                    </div>
                </div>
                <div className='relative sm:w-[300px] sm:h-[400px] w-[350px] h-[500px] bg-white flex flex-col text-[#606060] items-center'>
                    <img src={second} alt="" className='w-full h-[50%] object-cover' />
                    <div className='bg-[#47a0ff] w-[150px] text-center flex justify-center items-center h-[40px] rounded-sm text-white font-oswald gap-1 absolute bottom-[47%]'>
                        <p className='text-xl line-through'>$899 </p> <span className='text-2xl line-none'>$499</span>
                    </div>
                    <div className='text-center h-[50%] flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-4xl font-oswald'>SURFING</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta, fugit accusamus, sequi consectetur incidunt corrupti nemo aliquam ad earum quos distinctio, ea mollitia?</p>
                        <button className='w-[180px] bg-blue-600 hover:bg-blue-500 text-center text-white rounded-sm h-[45px]'>BOOK NOW</button>
                    </div>
                </div>
                <div className='relative sm:w-[300px] sm:h-[400px] w-[350px] h-[500px] bg-white flex flex-col text-[#606060] items-center'>
                    <img src={third} alt="" className='w-full h-[50%] object-cover' />
                    <div className='bg-[#47a0ff] w-[150px] text-center flex justify-center items-center h-[40px] rounded-sm text-white font-oswald gap-1 absolute bottom-[47%]'>
                        <p className='text-xl line-through'>$899 </p> <span className='text-2xl line-none'>$499</span>
                    </div>
                    <div className='text-center h-[50%] flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-4xl font-oswald'>SURFING</h1>
                        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dicta, fugit accusamus, sequi consectetur incidunt corrupti nemo aliquam ad earum quos distinctio, ea mollitia?</p>
                        <button className='w-[180px] bg-blue-600 hover:bg-blue-500 text-center text-white rounded-sm h-[45px]'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
