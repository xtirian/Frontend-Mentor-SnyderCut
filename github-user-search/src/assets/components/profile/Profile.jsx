import { useEffect, useState } from "react";

import "./profile.scss";

const Profile = ({ userImg, userName, userTag, userDate }) => {
  let formatDate = (dateFunction) => {
    const d = new Date(dateFunction);

    console.log(d);
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let day = d.getDate();
    console.log(day);
    let month = monthList[d.getMonth()];
    console.log(month);
    let year = d.getFullYear();
    console.log(year);

    return `${day} ${month} ${year}`;
  };

  const [img, setImg] = useState(userImg);
  const [name, setName] = useState(userName);
  const [user, setUser] = useState(userTag);
  const [date, setDate] = useState(userDate);

  useEffect(() => {
    setImg(userImg);
    setName(userName);
    setUser(userTag);
    setDate(formatDate(userDate));
  }, [user, userTag]);

  return (
    <div className="profile__container">
      <img src={img} alt="profileImg" className="profile__img" />
      <div className="profile__infos">
        <div>
          <h2 className="profile__name">{name !== "" ? name : user}</h2>
          <a
            href={`https://github.com/${user}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="profile__user">@{user}</span>
          </a>
        </div>
        <p className="profile__acCreate">Joined {date}</p>
      </div>
    </div>
  );
};

export default Profile;
