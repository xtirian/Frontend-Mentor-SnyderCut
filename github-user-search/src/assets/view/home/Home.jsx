import { useEffect, useState } from "react";

import handleAPI from "../../service/HandleFetch";
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
  let [userInput, setUserInput] = useState("");
  let [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

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

      <form onSubmit={async (e) => {
              e.preventDefault()

              const userFetchedInfo = await handleAPI.handleFetch(userInput);

                if(userFetchedInfo != Object){
                  return e
                }
              //setUserInfo(userFetchedInfo);
            }} >
        <label className="input-container">
          <BsSearch />
          <input type="text" placeholder="Search GitHub username…" />
          <span>No results</span>
          <button >
            Search
          </button>
        </label>
      </form>
    </main>
  );
};

export default Home;
