import React, { useEffect, useInsertionEffect, useState } from "react";

//STYLE
import './card.scss'

//COMPONENTS
import Profile from "../../components/profile/Profile";
import Bio from "../../components/bio/Bio";
import Followers from "../../components/follower/Followers";
import { Links } from "../links/Links.jsx";

const Card = ({ userData }) => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    setUser(userData);
  }, [user, userData]);

  return (
    <div className="cards_infoContainer container">
      <img src="/Oval.jpg" alt="profileImg" className="image_card" />
      <Profile
        userImg="/Oval.jpg"
        userName="Matheus"
        userTag="xtirian"
        userDate={"2023-10-28T21:12:30Z"}
      />
      <Bio bioMsg="" />
      <Followers repos="8" nFers="3938" nFing="9" />
      <Links 
        city="RJ" 
        blog =""
        linkedin=""
        company=""
      />
    </div>
  );
};

export default Card;
