import StackComponent from "@/components/stack";
import React from "react";

const Stacks = () => {
  return (
    <div className="bg-rings bg-no-repeat bg-[bottom_0_right_-344px] md:bg-[bottom_0_right_-256px] pb-[10rem] md:mb-[6rem] lg:mb-[68px]">
      <div className="container mx-auto border-y-2 border-y-[#979797] md:border-b-transparent flex flex-col items-center md:items-start md:flex-row md:flex-wrap py-[5rem] gap-y-[24px] md:gap-x-[100px] md:gap-y-[6.5rem] lg:gap-y-[58px] md:py-[6.5rem] lg:py-[9rem] ">
        <StackComponent name={"Typescript"} timeExperience={"1"} />
        <StackComponent name={"Node"} timeExperience={"1"} />
        <StackComponent name={"React"} timeExperience={"2"} />
        <StackComponent name={"API"} timeExperience={"1"} />
        <StackComponent name={"SQL"} timeExperience={"1"} />
        <StackComponent name={"MongoDB"} timeExperience={"1"} />
        
      </div>
    </div>
  );
};

export default Stacks;
