import Image from "next/image";

//images import

import gitIcon from "../../public/images/icons/icon-github.svg";
import linkedinIcon from "../../public/images/icons/icon-linkedin.svg";
import frontIcon from "../../public/images/icons/icon-frontend-mentor.svg";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="container mx-auto center max-w-[1100px] py-16 flex justify-between ">
        <header>
          <p className="text-White text-[3rem]/[3rem] font-bold">xTirian</p>
        </header>
        <nav>
          <ul className="flex gap-[4rem]  ">
            <li>
              <a href="https://github.com/xtirian">
                <Image src={gitIcon} width={25} height={24} alt="gitIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mf-cunha/">
                <Image src={frontIcon} width={25} height={24} alt="frontIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mf-cunha/">
                <Image
                  src={linkedinIcon}
                  width={25}
                  height={24}
                  alt="linkedinIcon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <section className="bg-rings bg-no-repeat">
          <h1 className="text-xl text-White">
            Nice to meet you! <br></br>I'm{" "}
            <span className="underline decoration-Green">Matheus</span>.
          </h1>
          <p></p>
          <a href=""></a>

          {/* Adicionar imagem profile e pattern */}
        </section>
      </main>
    </div>
  );
}
