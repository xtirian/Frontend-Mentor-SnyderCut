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

 
  let [userInput, setUserInput] = useState("");
  let [userInfo, setUserInfo] = useState("");
  let [errMsgForm, setErrMsgForm] = useState("");

  //setar o valor default que irá aparecer no inicio.
  let defaultUser = async () => {
    //APAGAR: depois preciso resetar para atender as regras de negócio
    let result = await handleAPI.handleFetch("1");
    setUserInfo(result);
  };
  //Este Hook irá renderizar o usuário default quando a página inicia
  //a forma como foi feita está desta forma pois estava dando um loop infinito de Fetchs
  //
  useEffect(() => {
    if (typeof userInfo === "string") {
      defaultUser();
      console.log(userInfo);
      console.log("preenchido 1 vez");
    } else {
      console.log(userInfo);
      console.log("Não preenchido novamente");
    }
  }, []);

  //APAGAR: apenas para acompanhar as mudanças dos usuários
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
          //Previne que o formulário dê refresh na página
          e.preventDefault();

          //Valida o usuário foi pesquisado com sucesso, para previnir qualquer retorno inesperado
          const validateUser = await handleAPI.ConsultAPI(userInput);

          //verifica se, além de válido, se foi digitado algum valor
          if (userInput !== "" && validateUser == true) {
            //Se estiver tudo okay, ele renderiza a página
            const userResult = await handleAPI.handleFetch(userInput);
            setUserInfo(userResult);
          } else {
            //se não estiver okay, chama a mensagem de erro e não renderiza a página.
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
              //Ao mexer no input, ele reseta a mensagem de erro
              //E atualiza o valor da Variável de Estado do Input
              setErrMsgForm("");
              setUserInput(t.target.value);
            }}
          />
          <span>{errMsgForm}</span>
          <button type="submit">Search</button>
        </label>
      </form>
    </main>
  );
};

export default Home;
