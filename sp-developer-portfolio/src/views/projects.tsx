import React from "react";

import ButtonContact from "@/components/button-contact";
import CardComponent from "../components/cards";

interface ProjectsProps {
  scrollIntoView: Function;
}

export default function Projects({ scrollIntoView }: ProjectsProps) {
  return (
    <div>
      <section className="container mx-auto flex justify-between items-center flex-wrap mb-[92px] md:mb-0">
        <h2 className="text-White text-[5rem]/[5rem] text-center md:text-left md:text-xl">
          Projects
        </h2>
        <ButtonContact scrollIntoView={scrollIntoView} />
        <div className="w-full flex flex-wrap gap-y-[12.25rem] md:gap-x-[3rem] md:gap-y-[14.75rem] lg:gap-x-[2.5rem] lg:gap-y-[8.625rem] py-[5rem] md:py-[7.5rem] lg:py-[10rem] ">
          {/* card1 */}
          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project1.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project1.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
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
              <p>JAVASCRIPT</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>

          {/* Card 2 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project7.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project7.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://modern-art.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/art-gallery-website"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">MODERN ART GALLERY</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
              <p>REACT</p>
              <p>LEAFLET</p>
              <p>SASS</p>
            </div>
          </div>

          {/* Card 3 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project9.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project9.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://typemaster-keyboard-landing-page.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/typemaster-keyboard-landing-page"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">TYPEMASTER PRE-SALE</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
              <p>VITEJS</p>
              <p>TYPESCRIPT</p>
              <p>SASS</p>
            </div>
          </div>

          {/* card4 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project8.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project8.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://github-user-search-pi-fawn.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/github-user-search"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">GITHUB USER SEARCH</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
              <p>VITEJS</p>
              <p>HOOKS</p>
              <p>SASS</p>
            </div>
          </div>

          {/* card5 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project10.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project10.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://quiz-app-xtirian.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/quiz-app"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">WEBDEV QUIZ APP</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
              <p>REACT</p>
              <p>SCSS</p>
              <p>CONTEXTAPI</p>
            </div>
          </div>

          {/* card 6 */}

          <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-[url(/images/projects/project6.webp)] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-[url(/images/projects/project6.webp)] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href="https://xtirian-portfolio.vercel.app/"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/develop/sp-developer-portfolio"
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
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
