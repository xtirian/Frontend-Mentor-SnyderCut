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
      <img src={user.avatar_url} alt="profileImg" className="image_card" />
      <Profile
        userImg={user.avatar_url}
        userName={user.name}
        userTag={user.login}
        userDate={user.created_at}
      />
      <Bio bioMsg={user.bio} />

      <Followers repos={user.public_repos} nFers={user.followers} nFing={user.following} user={user.login} />
      <Links 
        city={user.location} 
        blog ={user.blog}
        twitter={user.twitter_username}
        company={user.company}
      />
    </div>
  );
};

export default Card;
