import React from 'react'
import logo1 from '../assets/Isolation_Mode.png'
import icon1 from '../assets/i1.png'
import search from '../assets/icon.png'

export default function Navbar() {
    return (
        <section className='flex justify-between items-center max-w-[80%] mx-auto'>
            <div className='flex items-center justify-center'>
                <img className='w-[39.30px] h-[30px] relative' src={logo1} alt="" />
                <p className="text-black text-[28px] font-bold font-['Exo'] leading-[33.60px]">EduPress</p>
            </div>

            <div className='flex gap-8 items-center'>
                <ul className='flex justify-between items-center gap-6'>
                    <div className='w-[84px] h-[52px] px-5 bg-neutral-100 justify-start items-center gap-1 inline-flex'>
                        <li className="text-orange-500 text-base font-semibold font-['Exo'] capitalize leading-tight" >Home</li>
                    </div>
                    <li className="text-black text-base font-semibold font-['Exo'] capitalize leading-tight" >Courses</li>
                    <li className="text-black text-base font-semibold font-['Exo'] capitalize leading-tight" >Blog</li>
                    <div className='flex'>
                        <li className="text-black text-base font-semibold font-['Exo'] capitalize leading-tight" >Pages</li>
                        <img src={icon1} alt="" />
                    </div>
                </ul>
                <ul className='flex gap-6 items-center justify-center'>
                    <li class="text-black text-base font-semibold font-['Exo'] capitalize leading-tight">LearnPress Add-On</li>
                    <li class="text-black text-base font-semibold font-['Exo'] capitalize leading-tight">Premium Theme</li>
                </ul>
            </div>

            <div className='flex items-center justify-center gap-2'> 
                <p className="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">Login / Register</p>
                <div className='w-10 h-10 p-2.5 rounded-3xl border-2 border-orange-500 justify-center items-center gap-2.5 inline-flex'>
                    <img src={search} className='w-4 h-4 relative' alt="" />
                </div>
            </div>
        </section>
    )
}
