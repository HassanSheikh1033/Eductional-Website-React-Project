import React from 'react'
import herop from '../assets/herob.png'
import scl1 from '../assets/scl 1.png'
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector2.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import courses1 from '../assets/courses1.png'
import courses2 from '../assets/courses2.png'
import courses3 from '../assets/courses3.png'
import courses4 from '../assets/courses4.png'
import courses5 from '../assets/courses5.png'
import courses6 from '../assets/courses6.png'
import group1 from '../assets/Group1.png'
import group2 from '../assets/Group2.png'
import group3 from '../assets/Group3.png'
import skill from '../assets/skill.png'
import trick from '../assets/trick.png'
import quote from '../assets/quote.png'
import logo1 from '../assets/logo12.png'
import group5 from '../assets/group5.png'
import article1 from '../assets/article1.png'
import article2 from '../assets/article2.png'
import article3 from '../assets/article3.png'
import card1 from '../assets/Mobiles1.png'
import card2 from '../assets/Mobiles2.png'




export default function Home() {

    return (
        <>
            {/* ===========================  Hero-Section  ============================= */}
            <section className='gradient'>
                <div className='flex mx-auto items-center justify-between pl-[350px] pr-[250px]'>
                    <div className='flex flex-col gap-5 mt-[60px]  justify-start'>
                        <h1 className="text-black text-6xl font-semibold font-['Exo 2'] capitalize leading-[57.60px]">
                            Build Skills with <br />Online Course
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            We denounce with righteous indignation and dislike men who are <br /> so beguiled and demoralized that cannot trouble.
                        </p>
                        <div>
                            <button className="px-6 py-2.5 bg-orange-500 rounded-3xl text-white text-lg font-medium font-['Jost'] capitalize leading-[27px]">
                                Posts comment
                            </button>
                        </div>
                    </div>

                    <div className=''>
                        <img src={herop} alt="" />
                    </div>

                </div>

            </section>



            {/* ===========================  Categories-Section  ============================= */}
            <section className='mt-[100px] max-w-[70%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className="text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                            Top Categories
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px] mt-3">
                            Explore our Popular Categories
                        </p>
                    </div>

                    <button className="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]
                     px-4 py-2.5 rounded-3xl border-2 border-neutral-400">
                        All categories
                    </button>
                </div>

                <div className='mt-[50px] grid grid-cols-5 gap-7'>
                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 inline-flex">
                        <img src={icon1} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Art & Design
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>


                    <div className="w-[234px] h-[234px] bg-white rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 inline-flex shadow-xl">
                        <img src={icon2} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-orange-500 text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Development
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>


                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center shadow gap-6 inline-flex">
                        <img src={icon3} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Communiication
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>

                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center shadow gap-6 inline-flex">
                        <img src={icon4} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Videography
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>

                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon5} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Marking
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>

                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon6} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Content Writing
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>

                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon7} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Finance
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>

                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon8} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Science
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>


                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon9} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Photography
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>


                    <div className="w-[234px] h-[234px] rounded-[20px] border border-gray-200 flex-col justify-center
                     items-center gap-6 shadow inline-flex">
                        <img src={icon1} className='w-8 h-8 relative' alt="" />
                        <h1 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                            Network
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                            38 Courses
                        </p>
                    </div>
                </div>

            </section>



            {/* ========================  Courses Section   ========================== */}

            <section className='mt-[130px] pb-20 max-w-[70%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className="text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                            Featured Courses
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px] mt-3">
                            Explore our Popular Courses
                        </p>
                    </div>

                    <button className="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]
                     px-4 py-2.5 rounded-3xl border-2 border-neutral-400">
                        All courses
                    </button>
                </div>


                <div className='grid grid-cols-3'>
                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                    border border-[#EAEAEA]'>
                        <div>
                            <img src={courses1} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                 border border-[#EAEAEA]'>
                        <div>
                            <img src={courses2} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                 border border-[#EAEAEA]'>
                        <div>
                            <img src={courses3} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                 border border-[#EAEAEA]'>
                        <div>
                            <img src={courses4} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                 border border-[#EAEAEA]'>
                        <div>
                            <img src={courses5} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                 border border-[#EAEAEA]'>
                        <div>
                            <img src={courses6} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>
                            <div className='flex gap-2'>
                                <span className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">
                                    by
                                </span>
                                <span className="text-black text-base font-normal font-['Jost'] leading-normal">
                                    Determined-Poitras
                                </span>
                            </div>
                            <h1 className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">
                                Create an LMS Website with LearnPress
                            </h1>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group1} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={group2} alt="" />
                                    {/* <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">2Weeks</p> */}
                                </div>
                            </div>
                            <div className="w-[370px] h-px bg-gray-200"></div>
                            <div className='flex justify-between gap-[189px]'>
                                <div className='flex gap-1'>
                                    <p className="text-neutral-400 text-lg font-normal font-['Jost'] line-through leading-[27px]">$29.0</p>
                                    <p className="text-lime-600 text-lg font-medium font-['Jost'] capitalize leading-[27px]">Free</p>

                                </div>
                                <p className="text-right text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">View more</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* ==========================   Offers - Section  =================================== */}
            <section className='mt-[80px] pb-20 max-w-[70%] mx-auto flex items-center gradient1 rounded-xl gap-9
            justify-center'>
                <div className='flex flex-col py-6'>
                    <p className="text-neutral-600 text-base font-semibold font-['Exo'] capitalize leading-tight">
                        GET MORE POWER FROM
                    </p>
                    <h1 className="w-[450px] text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]
                    mt-[15px] ">
                        LearnPress Add-Ons
                    </h1>
                    <div className="w-[450px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px] mt-9">
                        The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.
                    </div>
                    <div className='mb-8'>
                        <button className="text-white text-lg font-medium font-['Jost'] capitalize leading-[27px] px-6 py-2.5
                        bg-orange-500 rounded-3xl mt-10">
                            Explorer course
                        </button>
                    </div>
                </div>
                <div className='py-6'>
                    <img src={group3} alt="" />
                </div>
            </section>



            {/* ==========================   Growth - Section  =================================== */}
            <section className='mt-[130px] pb-20 max-w-[70%] mx-auto flex gap-10'>
                <div className="w-[300px] h-[181px] py-[50px] bg-neutral-100 rounded-[20px] flex-col justify-center
                 items-center gap-4 inline-flex">
                    <p className="text-orange-500 text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">25K+</p>
                    <p class="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">Active Students</p>
                </div>

                <div className="w-[300px] h-[181px] py-[50px] bg-neutral-100 rounded-[20px] flex-col justify-center
                 items-center gap-4 inline-flex">
                    <p className="text-orange-500 text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">900</p>
                    <p class="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">Instructor</p>
                </div>

                <div className="w-[300px] h-[181px] py-[50px] bg-neutral-100 rounded-[20px] flex-col justify-center
                 items-center gap-4 inline-flex">
                    <p className="text-orange-500 text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">150</p>
                    <p class="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">Total Courses</p>
                </div>

                <div className="w-[300px] h-[181px] py-[50px] bg-neutral-100 rounded-[20px] flex-col justify-center
                 items-center gap-4 inline-flex">
                    <p className="text-orange-500 text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">100%</p>
                    <p class="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]">Satisfaction</p>
                </div>
            </section>



            {/* ==========================   Skill - Section  =================================== */}
            <section className='mt-[80px] pb-20 max-w-[70%] mx-auto flex items-center gap-11'>
                <div>
                    <img src={skill} alt="" />
                </div>
                <div className='ml-[129px]'>
                    <p className="text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                        Grow us your skill <br />with LearnPress LMS
                    </p>
                    <p class="w-[520px] h-14 text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px] mt-5 mb-5">
                        We denounce with righteous indignation and dislike men who are so
                        beguiled and demoralized that cannot trouble.
                    </p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2'>
                            <img src={trick} alt="" />
                            <p class="text-black text-lg font-normal font-['Jost'] leading-[27px]">Certification</p>
                        </div>

                        <div className='flex gap-2'>
                            <img src={trick} alt="" />
                            <p class="text-black text-lg font-normal font-['Jost'] leading-[27px]">Certification</p>
                        </div>

                        <div className='flex gap-2'>
                            <img src={trick} alt="" />
                            <p class="text-black text-lg font-normal font-['Jost'] leading-[27px]">Certification</p>
                        </div>

                        <div className='flex gap-2'>
                            <img src={trick} alt="" />
                            <p class="text-black text-lg font-normal font-['Jost'] leading-[27px]">Certification</p>
                        </div>
                    </div>
                    <button className="text-white text-lg font-medium font-['Jost'] capitalize leading-[27px] px-6 py-2.5
                        bg-orange-500 rounded-3xl mt-10">
                        Explorer course
                    </button>
                </div>
            </section>



            {/* ==========================   Explore - Section  =================================== */}
            <section className='mt-[80px] pb-20 max-w-[70%] mx-auto flex items-center gap-11 gradient3'>
                <div className=''>
                    <img src={card1} alt="" />
                </div>

                <div className='flex flex-col items-center text-center justify-center gap-7 pt-[56px]'>
                    <h3 className="text-center text-black text-base font-semibold font-['Exo'] capitalize leading-tight">
                        PROVIDING AMAZING
                    </h3>
                    <h1 class="text-center text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                        education wordpress theme
                    </h1>
                    <p className="text-center text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        The next level of LMS WordPress Theme. Learn anytime and anywhere.
                    </p>
                    <button className="text-white text-lg font-medium font-['Jost'] capitalize leading-[27px] px-6 py-2.5
                        bg-orange-500 rounded-3xl">
                        Explorer course
                    </button>

                </div>

                {/* <div>
                    <img src={card2} alt="" />
                </div> */}
            </section>



            {/* ==========================   Testimonail - Section  =================================== */}
            <section className='mt-[80px] pb-20 max-w-[70%] mx-auto'>
                <div className=''>
                    <p class="text-center text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                        Student feedbacks
                    </p>
                    <p className="text-center text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                        What Students Say About Academy LMS
                    </p>
                </div>

                <div className='flex gap-12 items-center justify-between'>
                    <div className='w-[300px] h-[407.80px] px-[30px] py-10 bg-white rounded-[20px] border border-gray-200
                    flex-col justify-start items-start gap-[30px] inline-flex mt-[80px]'>
                        <img src={quote} alt="" />
                        <p className="w-60 text-black text-lg font-normal font-['Jost'] leading-[27px]">
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Roe Smith</h3>
                            <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">Designer</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[407.80px] px-[30px] py-10 bg-white rounded-[20px] border border-gray-200
                    flex-col justify-start items-start gap-[30px] inline-flex mt-[80px]'>
                        <img src={quote} alt="" />
                        <p className="w-60 text-black text-lg font-normal font-['Jost'] leading-[27px]">
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Roe Smith</h3>
                            <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">Designer</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[407.80px] px-[30px] py-10 bg-white rounded-[20px] border border-gray-200
                    flex-col justify-start items-start gap-[30px] inline-flex mt-[80px]'>
                        <img src={quote} alt="" />
                        <p className="w-60 text-black text-lg font-normal font-['Jost'] leading-[27px]">
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Roe Smith</h3>
                            <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">Designer</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[407.80px] px-[30px] py-10 bg-white rounded-[20px] border border-gray-200
                    flex-col justify-start items-start gap-[30px] inline-flex mt-[80px]'>
                        <img src={quote} alt="" />
                        <p className="w-60 text-black text-lg font-normal font-['Jost'] leading-[27px]">
                            I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
                        </p>
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Roe Smith</h3>
                            <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">Designer</p>
                        </div>
                    </div>

                </div>

            </section>



            {/* ==========================   Info - Section  =================================== */}
            <section className='mt-[80px] pb-20 max-w-[70%] mx-auto flex items-center justify-between gradient2 rounded-xl'>
                <div className='flex items-center justify-center gap-4 mt-7'>
                    <div class="w-[120px] h-[120px] px-[30px] bg-white rounded-[60px] justify-center items-center gap-2.5 inline-flex">
                        <img src={logo1} alt="" />
                    </div>
                    <p className="text-white text-xl font-semibold font-['Exo'] capitalize leading-normal">
                        Let’s Start With Academy LMS
                    </p>
                </div>

                <div className='flex items-center gap-5'>
                    <button className="text-white text-lg font-bold font-['Jost'] capitalize leading-[27px] px-6 py-2.5
                       rounded-3xl mt-10 border-2 border-white-500">
                        I'm a Student
                    </button>
                    <button className="text-white text-lg font-medium font-['Jost'] capitalize leading-[27px] px-6 py-2.5
                        bg-orange-500 rounded-3xl mt-10">
                        Become an Instructor
                    </button>
                </div>
            </section>



            {/* ==========================   Article - Section  =================================== */}
            <section className='mt-[130px] pb-20 max-w-[70%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className="text-black text-[32px] font-semibold font-['Exo'] capitalize leading-[38.40px]">
                            Latest Articles
                        </h1>
                        <p className="text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px] mt-3">
                            Explore our latest articles
                        </p>
                    </div>

                    <button className="text-black text-lg font-medium font-['Jost'] capitalize leading-[27px]
                     px-4 py-2.5 rounded-3xl border-2 border-neutral-400">
                        All articles
                    </button>
                </div>


                <div className='flex gap-14'>
                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                      border border-[#EAEAEA]'>
                        <div>
                            <img src={article1} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>

                            <p className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Best LearnPress WordPress Theme Collection for 2023</p>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group5} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">Jan 24, 22023</p>
                                </div>
                            </div>
                            <div className="w-[370px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                                Looking for an amazing & well-functional LearnPress WordPress Theme?...
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                     border border-[#EAEAEA]'>
                        <div>
                            <img src={article2} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>

                            <p className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Best LearnPress WordPress Theme Collection for 2023</p>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group5} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">Jan 24, 22023</p>
                                </div>
                            </div>
                            <div className="w-[370px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                                Looking for an amazing & well-functional LearnPress WordPress Theme?...
                            </div>
                        </div>
                    </div>


                    <div className='mt-[70px] w-[410px] flex-col justify-start rounded-[20px] items-start gap-4 inline-flex
                    border border-[#EAEAEA]'>
                        <div>
                            <img src={article3} className='w-[410px] h-[250px] rounded-tl-[20px] rounded-tr-[20px]' alt="" />
                        </div>
                        <div className='flex flex-col gap-5 px-4 py-3'>

                            <p className="w-[370px] text-black text-xl font-semibold font-['Exo'] capitalize leading-normal">Best LearnPress WordPress Theme Collection for 2023</p>

                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={group5} className='w-4 h-4 relative it' alt="" />
                                    <p className="text-neutral-600 text-base font-normal font-['Jost'] leading-normal">Jan 24, 22023</p>
                                </div>
                            </div>
                            <div className="w-[370px] text-neutral-600 text-lg font-normal font-['Jost'] leading-[27px]">
                                Looking for an amazing & well-functional LearnPress WordPress Theme?...
                            </div>
                        </div>
                    </div>


                </div>

            </section>



        </>
    )
}
