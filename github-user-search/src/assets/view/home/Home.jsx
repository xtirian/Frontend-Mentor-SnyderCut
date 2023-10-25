import { useEffect, useState } from "react";

import handleAPI from "../../service/handleAPI";
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
  let [errMsgForm, setErrMsgForm] = useState("");

  //setar o valor default que irá aparecer no inicio.
  let defaultUser = async () => {
    let result = await handleAPI.handleFetch("1");
    setUserInfo(result);
  };
  useEffect(() => {
    console.log(typeof userInfo);
    if (typeof userInfo === "string") {
      defaultUser();
      console.log(userInfo);
      console.log("preenchido 1 vez");
    } else {
      console.log(userInfo);
      console.log("Não preenchido novamente");
    }
  }, []);

  //APAGAR: apenas para acompanhar as mudanças ods usuários
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <main className={`mainContainer theme-${theme}`}>
      <header className="head-container">
        <h1>devfinder</h1>
        <div className="theme-container">
          <button
            onClick={() => {
              theme == "light" ? setTheme("dark") : setTheme("light");
              console.log(theme);
            }}
          >
            {theme == "light" ? "Dark" : "Light"}
            <span>
              <img src={theme == "light" ? Moon : Sun} alt="" />
            </span>
          </button>
        </div>
      </header>

      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();

          const validateUser = await handleAPI.ConsultAPI(userInput);

          if (validateUser == true) {
            const userResult = await handleAPI.handleFetch(userInput);
            setUserInfo(userResult);
          } else {
            setErrMsgForm("No results");
          }
        }}
      >
        <label className="input-container">
          <BsSearch />
          <input
            type="text"
            placeholder="Search GitHub username…"
            onChange={(t) => {
              setErrMsgForm("");
              setUserInput(t.target.value);

              console.log(userInput);
            }}
          />
          <span>{errMsgForm}</span>
          <button>Search</button>
        </label>
      </form>
    </main>
  );
};

export default Home;
