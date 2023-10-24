import { useState } from "react";

import handleFetch from "./HandleFetch";
import "./Home.scss";

//IMAGES
import Sun from "/icon/icon-sun.svg";
import Moon from "/icon/icon-moon.svg";

//ICONS
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useState("light");

  /**Vou fazer uma parte simples para pegar o valor do input e jogar no serviço de fetch
   * Depois preciso criar uma variável
   */
  let [userInfo, setUserInfo] = useState("");

  return (
    <main className={`mainContainer theme-${theme}`}>
      <header className="head-container">
        <h1>devfinder</h1>
        <div className="theme-container">
          <button>
            {theme == "light" ? "Dark" : "Light"}
            <span>
              <img src={theme == "light" ? Moon : Sun} alt="" />
            </span>
          </button>
        </div>
      </header>
      <h1>{userInfo.login}</h1>

      <label className="input-container">
        <BsSearch />
        <input type="text" placeholder="Search GitHub username…" />
        <span>No results</span>
        <button
          onClick={() => {
            setUserInfo(handleFetch("xTirian"));
            console.log(userInfo);
          }}
        >
          Search
        </button>
      </label>
    </main>
  );
};

export default Home;
