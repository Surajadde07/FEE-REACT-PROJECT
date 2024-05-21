import React from 'react'
import call from "../assets/hs-icon1.png";
import bg from "../assets/header_bg.png";
import message from "../assets/hs-icon2.png"
import time from "../assets/hs-icon3.png"
import facebook from "../assets/hs-icon4.png"
import twitter from "../assets/hs-icon5.png"
import insta from "../assets/hs-icon6.png"
import youtube from "../assets/hs-icon-7.png"
import whatsapp from "../assets/hs-icon8.png"
import search from "../assets/hs-icon9.png"
import logo from "../assets/logo.png"


const Navbar = () => {
    return (
        <div className='relative h-[8rem]  flex flex-col gap-1'>
            <img src={bg}  className='absolute w-screen z-[-1] h-[90%]' />
            <div className="flex text-white justify-around items-center px-2 py-2 border-b-[.5px]">
                <div className='flex justify-center items-center gap-5 text-[14px]'>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={call}  className='w-[15px] h-[18px]' />
                        <p className='sm:hidden'>+91 8948675915</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={message}  className='w-[17px] h-[14px]' />
                        <p className='sm:hidden'>Tripfind@gmail.com</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={time}  className='w-[16px] h-[18px]' />
                        <p className='sm:hidden'>6am - 11pm</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'>
                    <img src={facebook}  className='w-[9px] cursor-pointer' />
                    <img src={twitter}  className='w-[15px] cursor-pointer' />
                    <img src={insta}  className='w-[15px] cursor-pointer' />
                    <img src={youtube}  className='w-[15px] cursor-pointer' />
                    <img src={whatsapp}  className='w-[15px] cursor-pointer' />
                    <div className='border-l-[.5px] h-[25px] border-solid pl-6 justify-center items-center flex'>
                        <img src={search}  className='w-[15px] h-[15px] cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='flex w-screen justify-around h-auto'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={logo}  className='w-[43px] h-[40px]' />
                    <h1 className='text-[40px] font-oswald text-white'>TRIP<span className='text-[#007bff]'>FINDER</span></h1>
                </div>
                <div className='flex justify-center items-center gap-8 sm:hidden'>
                    <a href="" className="text-white hover:text-[#007bff] duration-200">
                        <p>Home</p>
                    </a>
                    <a href="#blog" className="text-white hover:text-[#007bff] duration-200">
                        <p>Blog</p>
                    </a>
                    <a href="#gallery" className="text-white hover:text-[#007bff] duration-200">
                        <p>Gallery</p>
                    </a>
                    <a href="#activities" className="text-white hover:text-[#007bff] duration-200">
                        <p>Activities</p>
                    </a>
                    <a href="#deals" className="text-white hover:text-[#007bff] duration-200">
                        <p>Deals</p>
                    </a>
                    <a href="#contact" className="text-white hover:text-[#007bff] duration-200">
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
