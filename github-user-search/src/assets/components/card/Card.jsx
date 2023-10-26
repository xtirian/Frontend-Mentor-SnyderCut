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
    <div className="cards_infoContainer">
      <Profile
        userImg=""
        userName="Matheus"
        userTag="xtirian"
        userDate="25/10/2022"
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
