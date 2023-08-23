import "./globals.css";

import Image from "next/image";

//COMPONENTS
import Head from "../components/header"
import Projects from "../components/projects/projects"
import Footer from "../components/footer"


//header images import
import gitIcon from "../images/icons/icon-github.svg";
import linkedinIcon from "../images/icons/icon-linkedin.svg";
import frontIcon from "../images/icons/icon-frontend-mentor.svg";

//main images
import profileDesktop from "../images/profileImage/profile-desktop.jpg";

export default function Home() {
  return (
    <div className="h-screen">
      <Head /> 

      <main>
        <div className="bg-[url(../images/bg/pattern-rings.svg)] bg-no-repeat bg-[top_0_left_-256px] py-[95px] mb-[136px]">
          <section className="container mx-auto center relative">
            <h1 className="text-xl text-White mb-[43px] max-w-[709px]">
              Nice to meet you! I'm{" "}              
              <span className="underline decoration-Green">Matheus</span>.
            </h1>
            <p className="text-Grey text-body max-w-[445px] mb-[66px]">
              Based in the RJ, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <div className="inline border-b-2 border-b-Green pb-5">
              <a
                href=""
                className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem]"
              >
                Contact me
              </a>
            </div>

            {/* Adicionar imagem profile e bg-pattern pelo after */}
            <div className="absolute right-0 top-[-198px] z-[-1] after:content-[''] after:w-[129px] after:h-[129px] after:absolute after:bottom-[70px] after:left-[-64px] after:bg-[url(../images/bg/pattern-circle.svg)] ">
              <Image
                src={profileDesktop}
                width={445}
                height={720}
                alt="Profile png"
              />
            </div>
          </section>
        </div>
        {/* Depois ver a questão da query para acertar o max-width conforme a tela */}
        <div className="bg-[url(../images/bg/pattern-rings.svg)] bg-no-repeat bg-[bottom_0_right_-256px] mb-[68px]">
          <div className="container mx-auto border-t-2 border-t-[#979797] flex flex-wrap gap-x-[100px] gap-y-[58px] py-[9rem] ">
            <div className="w-1/4">
              <p className="text-l text-White">HTML</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
            <div className="w-1/4">
              <p className="text-l text-White">CSS</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
            <div className="w-1/4">
              <p className="text-l text-White">JavaScript</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
            <div className="w-1/4">
              <p className="text-l text-White">Accessibility</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
            <div className="w-1/4">
              <p className="text-l text-White">React</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
            <div className="w-1/4">
              <p className="text-l text-White">Sass</p>
              <p className="text-body text-Grey">1 Years Experience</p>
            </div>
          </div>
        </div>

        <Projects />        
      </main>
      <Footer />
    </div>
  );
}
