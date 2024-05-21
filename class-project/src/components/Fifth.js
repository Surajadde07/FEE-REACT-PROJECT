import React from 'react'
import img1 from '../assets/news-1.png'
import img2 from '../assets/news-2.png'
import img3 from '../assets/news-3.png'
import admin from '../assets/admin_icon.png'
import month from '../assets/month_icon.png'


const Fifth = () => {
    return (
        <div id='activities' className='w-screen h-[650px] sm:h-[1600px] flex flex-col justify-center items-center bg-[#ebebeb] gap-5'>
            <div className='flex flex-col justify-center w-screen items-center text-center gap-4'>
                <h1 className='text-4xl font-oswald text-[#353535]'>NEWS AND EVENTS</h1>
                <p className='text-sm w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugiat labore itaque velit, excepturi quidem cumque ducimus, sapiente ex tenetur eos. Quis sequi molest error?</p>
            </div>
            <div className='flex justify-center items-center gap-6 sm:flex-col'>
                <div className='w-[320px] h-[450px] relative flex flex-col text-[#606060] justify-center items-center p-2 bg-white'>
                    <img src={img1} alt="" className=' w-full h-[50%]'/>
                    <div className='w-full h-[50%] flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-[#47a0ff] text-2xl'>Living the Travel Lifestyle</h1>
                        <div className="flex justify-between  items-center w-full px-4">
                            <div className='flex justify-center items-center gap-2'>
                                <img src={admin} alt="" />
                                <p>Admin</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <img src={month} alt="" />
                                <p>May 11, 2024</p>
                            </div>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat officiis et a, saepe consectetur facere sequi impedit sed cupiditate?</p>
                    </div>
                </div>
                <div className='w-[320px] h-[450px] relative flex flex-col text-[#606060] justify-center items-center p-2 bg-white'>
                    <img src={img2} alt="" className=' w-full h-[50%]'/>
                    <div className='w-full h-[50%] flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-[#47a0ff] text-2xl'>Living the Travel Lifestyle</h1>
                        <div className="flex justify-between  items-center w-full px-4">
                            <div className='flex justify-center items-center gap-2'>
                                <img src={admin} alt="" />
                                <p>Admin</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <img src={month} alt="" />
                                <p>May 11, 2024</p>
                            </div>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat officiis et a, saepe consectetur facere sequi impedit sed cupiditate?</p>
                    </div>
                </div>
                <div className='w-[320px] h-[450px] relative flex flex-col text-[#606060] justify-center items-center p-2 bg-white'>
                    <img src={img3} alt="" className=' w-full h-[50%]'/>
                    <div className='w-full h-[50%] flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-[#47a0ff] text-2xl'>Living the Travel Lifestyle</h1>
                        <div className="flex justify-between  items-center w-full px-4">
                            <div className='flex justify-center items-center gap-2'>
                                <img src={admin} alt="" />
                                <p>Admin</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <img src={month} alt="" />
                                <p>May 11, 2024</p>
                            </div>
                        </div>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat officiis et a, saepe consectetur facere sequi impedit sed cupiditate?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifth
