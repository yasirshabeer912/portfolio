import React from 'react';
import { Link } from 'react-router-dom';


const ResumePage = () => {

    return (
        <>
            <div className="pt-12 md:py-12  sm:px-5 md:px-10 lg:px-14">
                <h2 className="after-effect after:left-44">Resume </h2>
                <div className="grid grid-cols-1  gap-x-6 gap-y-6 mt-[30px]">

                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
                            <h4 className="text-5xl dark:text-white font-medium"> Experience </h4>
                        </div>
                        <div
                            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">March-2023 - Present</span>
                            <h3 className="text-xl dark:text-white"> BlueCascade, Multan</h3>
                            <p className="dark:text-[#b7b7b7]"> Junior Software Engineer (MERN Stack,Automation,Shopify) </p>
                        </div>
                        <div
                            className="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">Nov-2022 - Feb-2023 </span>
                            <h3 className="text-xl dark:text-white"> N Hawks,Multan </h3>
                            <p className="dark:text-[#b7b7b7]">Frontend Developer Intern</p>
                        </div>
                    </div>





                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
                            <h4 className="text-5xl dark:text-white font-medium"> Education </h4>
                        </div>
                        <div
                            className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7] flex justify-between"> <span>2018-2022</span> <span>3.64 CGPA</span>  </span>
                            <h3 className="text-xl dark:text-white"> BS Information Technology </h3>
                            <p className="dark:text-[#b7b7b7]"> Emerson University Multan  </p>
                        </div>
                        <div
                            className="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2018</span>
                            <h3 className="text-xl dark:text-white"> Intermediate </h3>
                            <p className="dark:text-[#b7b7b7]">BISE DG KHAN </p>
                        </div>
                    </div>







                    <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <h4 className="text-5xl dark:text-white font-medium mb-6"> Working Skills </h4>
                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">MERN STACK</span>
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
                                    </div>
                                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                        <div className="bg-[#FF6464] h-1 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                        <span
                                            className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">React Js</span>
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">80%</span>
                                    </div>
                                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                        <div className="bg-[#ca56f2] h-1 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Automation (Selenium)</span>
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">85%</span>
                                    </div>
                                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                        <div className="bg-[#9272d4] h-1 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex justify-between mb-1">
                                        <span
                                            className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Shopify Customization</span>
                                        <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">65%</span>
                                    </div>
                                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                        <div className="bg-[#5185d4] h-1 rounded-full"></div>
                                    </div>
                                </div>

                                

                            </div>

                            <div className="col-span-1">
                                <h4 className="text-5xl dark:text-white font-medium mb-8"> Knowledges </h4>
                                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                                    <button className="resume-btn">MERN STACK</button>
                                    <button className="resume-btn">React Js</button>
                                    <button className="resume-btn">Node Js</button>
                                    <button className="resume-btn">Redux</button>
                                    {/* <button className="resume-btn">ES-6</button> */}
                                    <button className="resume-btn">CSS/CSS3</button>
                                    <button className="resume-btn">bootstrap/Tailwind</button>
                                    <button className="resume-btn">JavaScript</button>
                                    <button className="resume-btn">Responsive Design</button>
                                    <button className="resume-btn">Python</button>
                                    <button className="resume-btn">Selenium</button>
                                    <button className="resume-btn">Automation</button>
                                    <button className="resume-btn">Deployement</button>
                                    {/* <button className="resume-btn">XSLT</button> */}
                                    {/* <button className="resume-btn">XML</button> */}
                                    {/* <button className="resume-btn">Ajax</button> */}
                                    {/* <button className="resume-btn">PWA</button> */}
                                    <button className="resume-btn">HTML/HTML5</button>
                                </div>
                            </div>
                        </div>
                    </div>










                </div>

            </div>


        </>
    )
}

export default ResumePage;