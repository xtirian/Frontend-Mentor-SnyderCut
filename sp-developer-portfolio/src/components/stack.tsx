import React from "react";

interface StackProps{
  name: string
  timeExperience: string

}

const StackComponent = ({name, timeExperience}:StackProps) => {
  return (
    <div className="md:w-1/4">
      <p className="text-l text-center md:text-left text-White">{name}</p>
      <p className="text-body text-Grey text-center md:text-left">
        {timeExperience} Years Experience
      </p>
    </div>
  );
};

export default StackComponent;
