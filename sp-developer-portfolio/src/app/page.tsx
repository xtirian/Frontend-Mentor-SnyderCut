import "./globals.css";
import Image, { StaticImageData } from "next/image";

//COMPONENTS
import Head from "../components/header";
import Projects from "../components/projects/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="h-screen">
      <Head />
      <main>
        <div className="md:bg-[url(../images/bg/pattern-rings.svg)] bg-no-repeat md:bg-[top_0_left_-256px] lg:bg-[top_0_left_-100px] md:py-[58px] lg:py-[95px] md:mb-[14px] lg:mb-[136px]">
          <section className="container mx-auto center relative">
            <div
              className={`
          relative w-full h-[383px] before:bg-no-repeat before:content-[''] before:absolute before:bg-profileMobile before:bg-center before:top-[-92px] before:w-full before:h-[383px] md:before:z-[-1]  md:absolute md:before:bg-profileTablet md:before:w-[322px] md:before:h-[600px]  md:left-[417px] md:top-[-155px] lg:left-[665px] lg:top-[-198px] lg:before:w-[445px] lg:before:h-[720px] lg:before:bg-profileDesktop  after:content-[''] after:w-[129px] after:h-[129px] after:absolute after:z-1 
            md:after:top-[471px] md:after:left-[256px]
            lg:after:top-[521px] lg:after:left-[-64px] after:bg-circle `}
            ></div>
            <h1 className=" text-White mb-[43px] md:text-[9rem]/[9rem] md:tracking-[-0.25625rem] md:max-w-[445px] lg:text-xl lg:max-w-[709px]">
              Nice to <br className="lg:hidden"></br>meet you! I'm{" "}
              <span className="underline decoration-Green">Matheus</span>.
            </h1>
            <p className="text-Grey text-body max-w-[445px] mb-[66px]">
              Based in the RJ, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <div className="inline border-b-2 border-b-Green pb-5">
              <a
                href=""
                className="text-White  text-[2rem]/[3.25rem] hover:text-Green transition-colors ease-in duration-300 uppercase tracking-[0.28625rem]"
              >
                Contact me
              </a>
            </div>

            {/* Adicionar imagem profile e bg-pattern pelo after */}
            <div
              className={`
            absolute bg-no-repeat before:content-['']  before:z-[-1] md:before:bg-profileTablet md:before:w-[322px] md:before:h-[600px]
            md:left-[417px] md:top-[-155px] 
            lg:left-[665px] lg:top-[-198px] lg:before:w-[445px] lg:before:h-[720px] before:absolute 
            lg:before:bg-profileDesktop  after:content-[''] after:w-[129px] after:h-[129px] after:absolute after:z-1 
            md:after:top-[471px] md:after:left-[256px]
            lg:after:top-[521px] lg:after:left-[-64px] after:bg-circle `}
            ></div>
          </section>
        </div>
        {/* Depois ver a questão da query para acertar o max-width conforme a tela */}
        <div className="bg-[url(../images/bg/pattern-rings.svg)] bg-no-repeat bg-[bottom_0_right_-256px] md:mb-[6rem] lg:mb-[68px]">
          <div className="container mx-auto border-t-2 border-t-[#979797] flex flex-wrap gap-x-[100px] md:gap-y-[6.5rem] lg:gap-y-[58px] md:py-[6.5rem] lg:py-[9rem] ">
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
