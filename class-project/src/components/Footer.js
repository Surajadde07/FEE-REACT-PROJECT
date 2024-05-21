import React from 'react'
import f from "../assets/hs-icon4.png"
import t from "../assets/hs-icon5.png"
import i from "../assets/hs-icon6.png"
import y from "../assets/hs-icon-7.png"

const Footer = () => {
    return (
        <div id='contact' className='relative sm:grid sm:grid-cols-2 sm:grid-rows-2 w-screen h-[250px] flex justify-center items-center gap-3 sm:h-[350px] sm:p-4 sm:pt-[3rem]'>
            <div className='w-[300px] sm:w-full h-[150px] flex flex-col justify-start items-start gap-4'>
                <h1 className='font-oswald text-2xl text-[#606060]'>SUPPORT</h1>
                <p className='text-[#606060] sm:text-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis dignissimos quibusdam nulla. Dolore recusandae dolorum ea ex?</p>
            </div>
            <div className='w-[300px] sm:w-full h-[150px] flex flex-col justify-start items-start gap-4'>
                <h1 className='font-oswald text-2xl text-[#606060]'>SUPPORT</h1>
                <div className='text-[#606060] flex flex-col gap-1'>
                    <p className='hover:text-blue-500 cursor-pointer'>FAQ</p>
                    <p className='hover:text-blue-500 cursor-pointer'>Payment Options</p>
                    <p className='hover:text-blue-500 cursor-pointer'>Bokking Tips</p>
                </div>
            </div>
            <div className='w-[300px] sm:w-full h-[150px] flex flex-col justify-start items-start gap-4'>
                <h1 className='font-oswald text-2xl text-[#606060]'>FOLLOW US</h1>
                <div className='flex gap-3'>
                    <div className='w-[50px] sm:w-[35px] sm:h-[35px] h-[50px] bg-blue-500 hover:bg-blue-400 cursor-pointer flex justify-center items-center rounded-[50%]'>
                        <img src={f} alt=""  className='w-[10px]'/>
                    </div>
                    <div className='w-[50px] sm:w-[35px] sm:h-[35px] h-[50px] bg-blue-500 hover:bg-blue-400 cursor-pointer flex justify-center items-center rounded-[50%]'>
                        <img src={t} alt=""  className='w-[15px]'/>
                    </div>
                    <div className='w-[50px] sm:w-[35px] sm:h-[35px] h-[50px] bg-blue-500 hover:bg-blue-400 cursor-pointer flex justify-center items-center rounded-[50%]'>
                        <img src={i} alt=""  className='w-[15px]'/>
                    </div>
                    <div className='w-[50px] sm:w-[35px] sm:h-[35px] h-[50px] bg-blue-500 hover:bg-blue-400 cursor-pointer flex justify-center items-center rounded-[50%]'>
                        <img src={y} alt=""  className='w-[15px]'/>
                    </div>
                </div>
            </div>
            <div className='w-[300px] sm:w-full h-[150px] flex flex-col justify-start items-cente gap-4'>
                <h1 className='font-oswald text-2xl text-[#606060]'>NEWS LETTER</h1>
                <div className='w-[90%] h-[40px] flex justify-center items-center p-1 bg-[#f2f2f2] gap-1'>
                    <input type="text" className='w-[65%] h-full bg-[#f2f2f2] pl-2 outline-none' placeholder="Enter Email"/>
                    <button className='w-[30%] h-full text-white py-3 px-3 bg-blue-500 text-sm text-center flex justify-center items-center rounded-sm'>
                        <p>SUBMIT</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer
