import React from 'react'
import ButtonContact from './button-contact'

interface HeroBannerProps{
  scrollIntoView:Function
}

const HeroBanner = ({scrollIntoView}:HeroBannerProps) => {
  return (
    <div className="md:bg-rings bg-no-repeat md:bg-[top_0_left_-256px] lg:bg-[top_0_left_-100px] md:py-[58px] lg:py-[95px] md:mb-[14px] lg:mb-[136px]">
    <section className="container mx-auto relative pt-[331px] md:pt-0 mb-[60px] md:mb-0 flex flex-col justify-center items-center md:block">
      <div
        className={`
    absolute top-0 right-0
    sm:right-[calc(100%-(174px/2))] sm:top-0
    md:right-[292px] md:top-[-96px] 
    lg:right-[445px]
    
    before:bg-no-repeat before:content-[''] before:absolute before:bg-profileMobile before:bg-center before:top-[-92px] before:w-[174px] before:h-[383px] md:before:z-[-1]  md:before:bg-profileTablet md:before:w-[322px] md:before:h-[600px]  lg:before:w-[445px]  lg:before:h-[720px] lg:before:bg-profileDesktop 
    
    after:content-[''] 
    after:absolute  after:bg-no-repeat after:w-[129px] after:h-[129px]  after:top-[162px] after:left-[209px]  md:after:top-[375px] md:after:left-[256px] lg:after:top-[421px] lg:after:left-[-64px] after:bg-circle `}
      ></div>
      <h1 className=" text-White text-[5rem]/[5rem] text-center mb-[24px] md:text-left md:mb-[43px] md:text-[9rem]/[9rem] md:tracking-[-0.25625rem] md:max-w-[445px] lg:text-xl lg:max-w-[709px]">
        Nice to <br className="sm:hidden md:inline lg:hidden"></br>meet you! I'm <span className="underline decoration-Green">Matheus</span>.
      </h1>
      <p className="text-Grey text-body text-center md:text-left max-w-[445px] mb-[24px] md:mb-[66px]">
        Based in the RJ, I'm a front-end developer passionate about
        building accessible web apps that users love.
      </p>
      <ButtonContact scrollIntoView={scrollIntoView}  />
    </section>
  </div>
  )
}

export default HeroBanner