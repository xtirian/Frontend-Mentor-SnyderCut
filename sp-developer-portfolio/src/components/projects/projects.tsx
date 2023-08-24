

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
              <Card src="project1" project="" code="" title="BMI CALCULATOR">
                <p>HTML</p>
                <p>SASS</p>
                <p>JAVASCRIPT</p>
              </Card>
              <Card
                src="project2"
                project=""
                code=""
                title="E-LEARNING LP"
              >
              <p>HTML</p>
              <p>SASS</p>
              </Card>
              <Card src="project3" project="" code="" title="EQUALIZER LP">
                <p>HTML</p>
                <p>SASS</p>
              </Card>
              <Card src="project4" project="" code="" title="MEETING LP">
                <p>HTML</p>
                <p>SASS</p>
              </Card>
              <Card src="project5" project="" code="" title="POD REQUEST">
                <p>HTML</p>
                <p>SASS</p>
                <p>JAVASCRIPT</p>
              </Card>
              <Card src="project6" project="" code="" title="PORTFOLIO DEV">
                <p>REACT</p>
                <p>TAILWINDCSS</p>
                <p>NEXTJS</p>
              </Card>
            </div>
          </section>
        </div>
 )
}