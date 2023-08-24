import React from "react";

//header images import



export default function Head() {
 return(
  <div className="container mx-auto center py-10 md:py-16  flex flex-col items-center gap-y-[20px] md:gap-y-0 md:flex-row md:justify-between relative z-10">
  <header>
    <p className="text-White text-[3rem]/[4rem] md:text-[4rem]/[4rem] font-bold">xTirian</p>
  </header>
  <nav className="md:mr-[29.51px]">
    <ul className="flex gap-x-[4rem] justify-center ">
      <li>
        <a target="_blank" href="https://github.com/xtirian">
          <img src="/images/icons/icon-github.svg" className="w-[19px] h-[19px] md:w-[24px] md:h-[25px] hover:scale-150 transition-transform duration-500 ease-in-out " alt="gitIcon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.frontendmentor.io/profile/xtirian">
          <img src="/images/icons/icon-frontend-mentor.svg" className="w-[19px] h-[19px] md:w-[24px] md:h-[25px] hover:scale-150 transition-transform duration-500 ease-in-out" alt="frontIcon" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/mf-cunha/">
          <img
            src="/images/icons/icon-linkedin.svg"
            className="w-[19px] h-[19px] md:w-[24px] md:h-[25px] hover:scale-150 transition-transform duration-500 ease-in-out"
            alt="linkedinIcon"
          />
        </a>
      </li>
    </ul>
  </nav>
</div>
 )
}