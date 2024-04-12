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
          <CardComponent
            project="https://bmi-calculator-blond-two.vercel.app/"
            code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator"
            title="BMI CALCULATOR"
            imageName="project1.webp"
          >
            <p>JAVASCRIPT</p>
            <p>HTML</p>
            <p>CSS</p>
          </CardComponent>
          {/* Card 2 */}

          <CardComponent
            imageName={"project7.webp"}
            project={"https://modern-art.vercel.app/"}
            code={
              "https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/art-gallery-website"
            }
            title={"MODERN ART GALLERY"}
          >
            <p>REACT</p>
            <p>LEAFLET</p>
            <p>SASS</p>
          </CardComponent>

          {/* Card 3 */}

          <CardComponent
            imageName={"project9.webp"}
            project={"https://typemaster-keyboard-landing-page.vercel.app/"}
            code={
              "https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/typemaster-keyboard-landing-page"
            }
            title={"TYPEMASTER PRE-SALE"}
          >
            <p>REACT</p>
            <p>TYPESCRIPT</p>
            <p>SASS</p>
          </CardComponent>

          {/* card4 */}

          <CardComponent
            imageName={"project8.webp"}
            project={"https://github-user-search-pi-fawn.vercel.app/"}
            code={
              "https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/github-user-search"
            }
            title={"GITHUB USER SEARCH"}
          >
            <p>REACT</p>
            <p>API</p>
            <p>SASS</p>
          </CardComponent>

          {/* card5 */}

          <CardComponent
            imageName={"project10.webp"}
            project={"https://quiz-app-xtirian.vercel.app/"}
            code={
              "https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/quiz-app"
            }
            title={"WEBDEV QUIZ APP"}
          >
            <p>REACT</p>
            <p>SCSS</p>
            <p>TYPESCRIPT</p>
          </CardComponent>

          {/* card 6 */}

          <CardComponent
            imageName={"project6.webp"}
            project={"https://xtirian-portfolio.vercel.app/"}
            code={
              "https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/develop/sp-developer-portfolio"
            }
            title={"PORTFOLIO DEV"}
          >
            <p>REACT</p>
            <p>TAILWINDCSS</p>
            <p>NEXTJS</p>
          </CardComponent>
        </div>
      </section>
    </div>
  );
}
