import React, { useEffect, useState } from 'react'

const Followers = ({
  repos,
  nFers,
  nFing
}) => {
  const [nRepos, setNRepos] = useState(repos);
  const [nFollowers, setNFollowers] = useState(nFers);
  const [nFollowing, setNFollowing] = useState(nFing);

  useEffect(()=>{
    setNRepos(repos);
    setNFollowers(nFers);
    setNFollowing(nFing);

  },[nRepos, repos])


  return (
    <div className='follow__container'>
      <span>Repos
        <p>{nRepos}</p>
      </span>
      <span>Followers
        <p>{nFollowers}</p>
      </span>
      <span>Following
        <p>{nFollowing}</p>
      </span>
    </div>
  )
}

export default Followers