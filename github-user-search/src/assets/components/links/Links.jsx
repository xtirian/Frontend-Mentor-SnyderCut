import React, { useEffect, useState } from "react";

//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { ImLink } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

export const Links = ({ city, blog, linkedin, company }) => {
  const [userCity, setUserCity] = useState(city);
  const [userBlog, setUserBlog] = useState(blog);
  const [userLinkedin, setUserLinkedin] = useState(linkedin);
  const [userCompany, setUserCompany] = useState(company);

  useEffect(() => {
    setUserCity(city);
    setUserBlog(blog);
    setUserLinkedin(linkedin);
    setUserCompany(company);
  }, [userCity, city]);

  return (
    <>
      <div className="link__container">
        <FaLocationDot className="icon" />
        {userCity != "" ? (
          userCity
        ) : (
          <span className="errMsg__notAvailable">Not Available</span>
        )}
      </div>
      <div className="link__container">
        <ImLink className="icon" />
        {userBlog != "" ? (
          userBlog
        ) : (
          <span className="errMsg__notAvailable">Not Available</span>
        )}
      </div>
      <div className="link__container">
        <FaLinkedinIn className="icon" />
        {userLinkedin != "" ? (
          userLinkedin
        ) : (
          <span className="errMsg__notAvailable">Not Available</span>
        )}
      </div>
      <div className="link__container">
        <BsBuildingsFill className="icon" />
        {userCompany != "" ? (
          userCompany
        ) : (
          <span className="errMsg__notAvailable">Not Available</span>
        )}
      </div>
    </>
  );
};
