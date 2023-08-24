

import Card from './cards'

export default function Projects(){
 return (
  <div>
          <section className="container mx-auto flex justify-between items-center flex-wrap mb-[92px] md:mb-0">
            <h2 className="text-White text-[5rem]/[5rem] text-center md:text-left md:text-xl">Projects</h2>
            <div className="flex border-b-2 border-b-Green pb-5">
              <a
                href=""
                className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] hover:text-Green transition-colors ease-in duration-300"
              >
                Contact me
              </a>
            </div>
            <div className="w-full flex flex-wrap gap-y-[12.25rem] md:gap-x-[3rem] md:gap-y-[14.75rem] lg:gap-x-[2.5rem] lg:gap-y-[8.625rem] py-[5rem] md:py-[7.5rem] lg:py-[10rem] ">
              <Card src="project1" project="https://bmi-calculator-blond-two.vercel.app/" code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator" title="BMI CALCULATOR">
                <p>HTML</p>
                <p>SASS</p>
                <p>JAVASCRIPT</p>
              </Card>
              <Card
                src="project2"
                project="https://skilled-elearning-kappa.vercel.app/"
                code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/skilled-elearning-landing-page"
                title="E-LEARNING LP"
              >
              <p>HTML</p>
              <p>SASS</p>
              </Card>
              <Card src="project3" project="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/equalizer-landing-page" code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/equalizer-landing-page" title="EQUALIZER LP">
                <p>HTML</p>
                <p>SASS</p>
              </Card>
              <Card src="project4" project="https://meet-landing-page-hazel.vercel.app/" code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/meet-landing-page" title="MEETING LP">
                <p>HTML</p>
                <p>SASS</p>
              </Card>
              <Card src="project5" project="https://pod-alpha.vercel.app/" code="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/pod-request-access-landing-page" title="POD REQUEST">
                <p>HTML</p>
                <p>SASS</p>
                <p>JAVASCRIPT</p>
              </Card>
              <Card src="project6" project="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/develop/sp-developer-portfolio" code="" title="PORTFOLIO DEV">
                <p>REACT</p>
                <p>TAILWINDCSS</p>
                <p>NEXTJS</p>
              </Card>
            </div>
          </section>
        </div>
 )
}