import React, { useEffect, useState } from "react";

import './links.scss';

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
    <div className="links_grid">
      <div className="link__container">
        <p>        
        {userCity != "" ? (
          <span><FaLocationDot className="icon" />{userCity}</span>
        ) : (
          <span className="errMsg__notAvailable"><FaLocationDot className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container">
      <p>
        {userBlog != "" ? (
          <span><ImLink className="icon" /> {userBlog}</span>
        ) : (
          <span className="errMsg__notAvailable"><ImLink className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container">
      <p>
        
        {userLinkedin != "" ? (
          <span><FaLinkedinIn className="icon" />{userLinkedin}</span>
        ) : (
          <span className="errMsg__notAvailable"><FaLinkedinIn className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container">
      <p>
        
        {userCompany != "" ? (
          <span>
            <BsBuildingsFill className="icon" />
            {userCompany}</span>
        ) : (
          <span className="errMsg__notAvailable"><BsBuildingsFill className="icon" />Not Available</span>
        )}
        </p>
      </div>
    </div>
  );
};
