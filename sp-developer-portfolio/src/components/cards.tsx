import Image from "next/image";
import React, { useState, useEffect } from 'react';

interface CardsProps{
  src: string;
  project: string;
  code: string;
  title: string;
  children: React.ReactNode
}

export default function CardComponent({code, project, src, title, children}:CardsProps) {

  const [imageURL, setImageURL] = React.useState("")

  useEffect(() => {
    setImageURL(src)

    console.log(imageURL)

    
  }, [src])
  


  return (
    <div>
            <div
              className={`relative w-[343px] h-[253px] md:w-[342px] mb-[20px] md:h-[253px] lg:w-[540px] lg:h-[487px] flex lg:flex-col lg:items-center lg:justify-center lg:gap-y-[48px] bg-[rgba(0,0,0,0.80)] 
        before:bg-cover
        before:content-[""] before:bg-${imageURL})] before:inset-1 before:absolute before:z-[-1]
        after:bg-cover 
        after:content-[""] after:bg-${imageURL})] after:inset-1 after:absolute after:z-1 lg:hover:after:opacity-0
        lg:hover:after:z-[-1]
        focus-within:after:opacity-0
        after:transition-opacity after:duration-500 after:ease-in-out`}
            >
              <div className="flex border-b-2 border-b-Green pb-5 lg:static w-[1/2] absolute bottom-[-140px] md:bottom-[-140px]">
                <a
                  target="_blank"
                  href={project}
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Project
                </a>
              </div>
              <div className="flex border-b-2 border-b-Green pb-5 lg:static  w-[1/2] absolute bottom-[-140px] left-[171px] md:bottom-[-140px] md:left-[171px]">
                <a
                  target="_blank"
                  href={code}
                  className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] focus:text-Green hover:text-Green transition-colors ease-in duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="text-m text-White mb-[7px]">{title}</h3>
            <div className="text-body text-Grey flex gap-x-[2.25rem] ">
            {children}
            </div>
            
          </div>
  );
}
