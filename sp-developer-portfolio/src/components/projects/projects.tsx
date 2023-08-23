

import Card from './cards'

export default function Projects(){
 return (
  <div>
          <section className="container mx-auto flex justify-between items-center flex-wrap">
            <h2 className="text-White text-xl">Projects</h2>
            <div className="flex border-b-2 border-b-Green pb-5">
              <a
                href=""
                className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem]"
              >
                Contact me
              </a>
            </div>
            <div className="w-full flex flex-wrap gap-x-[2.5rem] gap-y-[8.625rem] py-[80px]">
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