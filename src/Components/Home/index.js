import React from 'react';

import Icon4 from '../../images/icon4.svg';
import Icon5 from '../../images/icon5.svg';


const HomeComponent = () => {
    return (
        <>

            <div className="pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
                {/* about page title */}
                <h2 className="after-effect after:left-60">About Yasir</h2>


                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] dark:text-color-910 leading-7"> 
I am a seasoned Software Engineer with 1.5 years of experience specializing in the MERN stack (MongoDB, Express.js, React, Node.js), Redux, React, Next.js, HTML, CSS, and Bootstrap. Additionally, I possess intermediate-level proficiency in PHP and Laravel, along with expertise in Python and Selenium for automation.
                            </p>
                            <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> Currently, I am contributing my skills and expertise as a Software Engineer at BlueCascade in Multan, focusing on automation engineering, deployment processes, and related tasks. My responsibilities include leveraging my proficiency in Python and Selenium to drive automation initiatives, ensuring efficiency and reliability in various processes.</p>
                            <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                            In addition to my technical skills, I bring a proactive and collaborative mindset to the team, fostering a culture of continuous improvement. I am always eager to explore new technologies and methodologies, staying abreast of industry trends to ensure that our software engineering practices remain at the forefront of innovation. My dedication to excellence and my ability to adapt to evolving challenges make me a valuable asset to the BlueCascade team, driving success in our automation and software development endeavors.
                            </p>

                        </div>
                        <div></div>
                    </div>
                </div>

            </div>

            {/* what i do section start */}
            <div className="pb-12  sm:px-5 md:px-10 lg:px-14">
                <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                <div className="grid gap-8 grid-cols-1">

                    <div className="about-box bg-[#f3faff] dark:bg-transparent">
                        <img className="w-10 h-10 object-contain block" src={Icon5}
                            alt="icon" />
                        <div className="space-y-2">
                            <h3 className="dark:text-white text-[22px] font-semibold"> Web Development </h3>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> I am a positive, enthusiastic and competent Web Developer who, 12 over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. I take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. If you hire me as your Web Developer, I assure you I will fit into your team quickly, I will always put the commercial needs of your business at the forefront of everything I do, and the work I carry out will be consistent to a first-class standard.</p>
                        </div>
                    </div>
                    <div className="about-box bg-[#fff0f8] dark:bg-transparent">
                        <img className="w-10 h-10 object-contain block" src={Icon4}
                            alt="icon" />
                        <div className="space-y-2">
                            <h3 className="dark:text-white text-[22px] font-semibold"> Automation Engineering </h3>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">I apply my relentless problem-solving approach to streamline processes and enhance operational efficiency. Leveraging analytical and technical skills, I craft solutions that seamlessly integrate automation throughout the software development lifecycle. As an adept hands-on leader, I ensure that automation initiatives align with organizational goals, bringing about tangible improvements in efficiency and reliability. My expertise extends beyond conventional development, making me a valuable asset in driving automation strategies that complement sales growth and marketing strategies for both established and start-up firms. </p>
                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}

export default HomeComponent;