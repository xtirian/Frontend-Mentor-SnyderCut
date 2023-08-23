import Image from "next/image";

//header images import
import gitIcon from "../images/icons/icon-github.svg";
import linkedinIcon from "../images/icons/icon-linkedin.svg";
import frontIcon from "../images/icons/icon-frontend-mentor.svg";


export default function Head() {
 return(
  <div className="container mx-auto center py-16 flex justify-between relative">
  <header>
    <p className="text-White text-[3rem]/[4rem] md:text-[4rem]/[4rem] font-bold">xTirian</p>
  </header>
  <nav className="mr-[29.51px]">
    <ul className="flex gap-[4rem]  ">
      <li>
        <a target="_blank" href="https://github.com/xtirian">
          <Image src={gitIcon} className="w-[19px] h-[19px] md:w-[24px] md:h-[25px]" alt="gitIcon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.frontendmentor.io/profile/xtirian">
          <Image src={frontIcon} className="w-[19px] h-[19px] md:w-[24px] md:h-[25px]" alt="frontIcon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/mf-cunha/">
          <Image
            src={linkedinIcon}
            className="w-[19px] h-[19px] md:w-[24px] md:h-[25px]"
            alt="linkedinIcon"
          />
        </a>
      </li>
    </ul>
  </nav>
</div>
 )
}