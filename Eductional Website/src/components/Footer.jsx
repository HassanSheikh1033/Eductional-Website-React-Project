import React from 'react'
import logo1 from '../assets/Isolation_Mode.png'
import ficons from '../assets/ficons.png'


export default function Footer() {
    return (
        <section className='w-[1920px] h-[552px] pt-[130px] pb-8 bg-neutral-100 flex-col justify-start items-center gap-[90px] inline-flex'>
            <div className='flex gap-[135px]'>
                <div className='flex flex-col gap-8'>
                    <div className='flex'>
                        <img className='w-[39.30px] h-[30px] relative' src={logo1} alt="" />
                        <p className="text-black text-[28px] font-bold font-['Exo'] leading-[33.60px]">EduPress</p>
                    </div>
                    <p className="w-[341px] h-[69px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>


                <div className='flex flex-col gap-8'>
                    <p className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                        GET HELP
                    </p>
                    <p className="text-neutral-600 text-lg font-medium font-['Jost'] capitalize leading-[45px]">
                        Contact Us<br />Latest Articles<br />FAQ
                    </p>
                </div>


                <div className='flex flex-col gap-8'>
                    <p className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                        PROGRAMS
                    </p>
                    <div>
                        <span className="text-neutral-600 text-lg font-medium font-['Jost'] capitalize leading-[45px]">
                            Art & Design
                            <br />
                        </span>
                        <span className="text-orange-500 text-lg font-medium font-['Jost'] capitalize leading-[45px]">
                            Business
                            <br />
                        </span>
                        <span className="text-neutral-600 text-lg font-medium font-['Jost'] capitalize leading-[45px]">
                            IT & Software<br />Languages<br />Programming
                        </span>
                    </div>
                </div>


                <div className='flex flex-col gap-4'>
                    <p className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal mb-6">
                        CONTACT US
                    </p>
                    <p className="w-[410px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
                    </p>
                    <p class="w-[410px] h-14 text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        Tel: + (123) 2500-567-8988<br />Mail: supportlms@gmail.com
                    </p>
                    <div className='w-21 h-21'>
                        <img src={ficons} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="w-[1290px] h-[59px] pt-8 border-t border-gray-200 justify-center items-center gap-2.5 inline-flex">
                    <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        Copyright © 2024 LearnPress LMS | Powered by ThimPress
                    </p>
                </div>
            </div>
        </section>
    )
}
