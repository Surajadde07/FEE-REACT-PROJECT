import React from 'react'
import bg from "../assets/section-6.png"

const Sixth = () => {
    return (
        <div  className='relative w-screen h-[600px] flex flex-col justify-center items-center'>
            <img src={bg} alt="" className='w-screen absolute h-full object-cover -z-10' />
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-8xl font-oswald text-white sm:text-center'>LUXARY TRAVEL</h1>
                <h2 className='text-4xl font-oswald text-white'>PEACE OF MIND GURANTED!</h2>
                <div className='w-[130px] h-[130px] bg-blue-500 hover:bg-blue-400 cursor-pointer flex justify-center items-center text-white rounded-[50%]'>
                    <p>FIND TOURS</p>
                </div>
            </div>
        </div>
    )
}

export default Sixth
