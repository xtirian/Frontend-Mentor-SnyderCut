import React from "react";

import Card from "./cards";

export default function Projects() {
  return (
    <div>
      <section className="container mx-auto flex justify-between items-center flex-wrap mb-[92px] md:mb-0">
        <h2 className="text-White text-[5rem]/[5rem] text-center md:text-left md:text-xl">
          Projects
        </h2>
        <div className="flex border-b-2 border-b-Green pb-5">
          <a
            href=""
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] hover:text-Green transition-colors ease-in duration-300"
          >
            Contact me
          </a>
        </div>
        <div className="w-full flex flex-wrap gap-y-[12.25rem] md:gap-x-[3rem] md:gap-y-[14.75rem] lg:gap-x-[2.5rem] lg:gap-y-[8.625rem] py-[5rem] md:py-[7.5rem] lg:py-[10rem] ">
          
{/* card1 */}
          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project1.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project1.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://bmi-calculator-blond-two.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">BMI CALCULATOR</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">            
            <p>HTML</p>
            <p>SASS</p>
            <p>JAVASCRIPT</p>
            </div>
          </div>

{/* Card 2 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project2.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project2.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://skilled-elearning-kappa.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/skilled-elearning-landing-page"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">E-LEARNING LP</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
            <p>HTML</p>
            <p>SASS</p>
            </div>
          </div>

          {/* Card 3 */}

          <div>
      <div
        className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project3.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project3.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
      >
        <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
          <a target="_blank"
            href="https://equalizer-lp-xtirian.vercel.app/"
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Project
          </a>
        </div>
        <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
          <a target="_blank" href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/equalizer-landing-page" className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Code
          </a>
        </div>
      </div>
      <h3 className="text-m text-White mb-[7px]">EQUALIZER LP</h3>
      <div className="text-body text-Grey flex gap-x-[2.25rem] ">
            <p>HTML</p>
            <p>SASS</p>
      </div>
    </div>


{/* card4 */}


<div>
      <div
        className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project4.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project4.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
      >
        <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
          <a target="_blank"
            href="https://meet-landing-page-hazel.vercel.app/"
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Project
          </a>
        </div>
        <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
          <a target="_blank" href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/meet-landing-page"            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Code
          </a>
        </div>
      </div>
      <h3 className="text-m text-White mb-[7px]">MEETING LP</h3>
      <div className="text-body text-Grey flex gap-x-[2.25rem] ">
      <p>HTML</p>
            <p>SASS</p>
      </div>
    </div>

         
         {/* card5 */}

         <div>
      <div
        className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project5.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project5.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
      >
        <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
          <a target="_blank"
            href="https://pod-alpha.vercel.app/"
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Project
          </a>
        </div>
        <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
          <a target="_blank" href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/pod-request-access-landing-page"       className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Code
          </a>
        </div>
      </div>
      <h3 className="text-m text-White mb-[7px]">POD REQUEST</h3>
      <div className="text-body text-Grey flex gap-x-[2.25rem] ">
       
      <p>HTML</p>
            <p>SASS</p>
            <p>JAVASCRIPT</p>
      </div>
    </div>


         {/* card 6 */}

         <div>
      <div
        className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/thumbnail-project6.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/thumbnail-project6.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
      >
        <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
          <a target="_blank"
            href="https://xtirian-portifolio.vercel.app/"
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Project
          </a>
        </div>
        <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
          <a target="_blank" href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/develop/sp-developer-portfolio"           className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
          >
            View Code
          </a>
        </div>
      </div>
      <h3 className="text-m text-White mb-[7px]">PORTFOLIO DEV</h3>
      <div className="text-body text-Grey flex gap-x-[2.25rem] ">
      <p>REACT</p>
            <p>TAILWINDCSS</p>
            <p>NEXTJS</p>
      </div>
    </div>

         
        </div>
      </section>
    </div>
  );
}
