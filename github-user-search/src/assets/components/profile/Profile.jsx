import { useEffect, useState } from "react";

const Profile = ({ userImg, userName, userTag, userDate }) => {
  const [img, setImg] = useState(userImg);
  const [name, setName] = useState(userName);
  const [user, setUser] = useState(userTag);
  const [date, setDate] = useState(userDate);

  useEffect(() => {
    setImg(userImg);
    setName(userName);
    setUser(userTag);
    setDate(userDate);
  }, [user, userTag]);

  return (
    <div className="profile__container">
      <img src={img} alt="profileImg" className="profile__img" />
      <div className="profile__infos">
        <h2 className="profile__name">{name !== "" ? name : user}</h2>
        <span className="profile__user">{user}</span>
        <p className="profile__acCreate">{date}</p>
      </div>
    </div>
  );
};

export default Profile;
