import React, { useEffect, useState } from "react";

import './links.scss';

//ICONS
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { ImLink } from "react-icons/im";
import { BsBuildingsFill } from "react-icons/bs";

export const Links = ({ city, blog, twitter, company }) => {
  const [userCity, setUserCity] = useState(city);
  const [userBlog, setUserBlog] = useState(blog);
  const [userTwitter, setUserTwitter] = useState(twitter);
  const [userCompany, setUserCompany] = useState(company);

  useEffect(() => {
    setUserCity(city);
    setUserBlog(blog);
    setUserTwitter(twitter);
    setUserCompany(company);
  }, [userCity, city]);

  return (
    <div className="links_grid">
      <div className="link__container link__container-1">
        <p>        
        {userCity != null ? (
          <span><FaLocationDot className="icon" />{userCity}</span>
        ) : (
          <span className="errMsg__notAvailable"><FaLocationDot className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container link__container-2">
      <p>
        {userBlog != "" ? (
          <span className="clickable" ><ImLink className="icon" /><a href={userBlog} target="_blank"> Click Here </a></span>
        ) : (
          <span className="errMsg__notAvailable"><ImLink className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container link__container-3">
      <p>
        
        {userTwitter != null ? (
          <span><FaXTwitter className="icon" />{userTwitter}</span>
        ) : (
          <span className="errMsg__notAvailable"><FaXTwitter className="icon" />Not Available</span>
        )}
        </p>
      </div>
      <div className="link__container link__container-4">
      <p>
        
        {userCompany != null ? (
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
