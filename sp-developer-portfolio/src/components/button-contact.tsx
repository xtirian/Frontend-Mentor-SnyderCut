import React, { useRef } from "react";

interface ButtonProps{
  scrollIntoView:Function
}

const ButtonContact = ({scrollIntoView}:ButtonProps) => {

  // to create the scrollintoview





  return (
    <div className="inline border-b-2 border-b-Green pb-5 md:mb-0 md:mx-0" onClick={()=> scrollIntoView()}>
      <p
        
        className="text-White  text-[2rem]/[3.25rem] hover:text-Green transition-colors ease-in duration-300 uppercase tracking-[0.28625rem] cursor-pointer"
      >
        Contact me
      </p>
    </div>
  );
};

export default ButtonContact;
