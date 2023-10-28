import React, { useEffect, useState } from 'react';

import './followers.scss';

const Followers = ({
  repos,
  nFers,
  nFing,
  user
}) => {
  const [nRepos, setNRepos] = useState(repos);
  const [nFollowers, setNFollowers] = useState(nFers);
  const [nFollowing, setNFollowing] = useState(nFing);
  const [userFollow, setUserFollow] = useState(user);

  useEffect(()=>{
    setNRepos(repos);
    setNFollowers(nFers);
    setNFollowing(nFing);
    setUserFollow(user);

  },[nRepos, repos])


  return (
    <div className='follow__container contrast_container '>
      <span>Repos
      <a href={`https://github.com/${userFollow}?tab=repositories`} target="_blank" rel="noopener noreferrer"><p className='clickable'>{nRepos}</p></a>
      </span>
      <span>Followers
        <a href={`https://github.com/${userFollow}?tab=repositories`} target="_blank" rel="noopener noreferrer"><p className='clickable'>{nFollowers}</p></a>
      </span>
      <span>Following
      <a href={`https://github.com/${userFollow}?tab=repositories`} target="_blank" rel="noopener noreferrer"><p className='clickable'>{nFollowing}</p></a>
      </span>
    </div>
  )
}

export default Followers