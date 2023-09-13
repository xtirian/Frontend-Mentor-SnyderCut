import React from "react";
import "./footer.scss";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Footer = (props) => {
  let theme = props.theme;

  let logoDark = "/images/logo-dark.svg";
  let logoLight = "/images/logo-light.svg";

  let currentLogo = theme == "dark" ? logoLight : logoDark;

  return (
    <div
      style={{
        backgroundColor: theme == "dark" ? "#151515" : "#d5966c",
        color: theme == "dark" ? "#fff" : "#151515",
      }}
      className="footer_container"
    >
      <footer>
        <img src={currentLogo} alt="logo" className="logo" />

        <p className="footer-content">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at America Avenue, RJ, BR.
        </p>

        <nav>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mf-cunha/" target="_blank" title="All the links here are from author's social media">
                <FaLinkedin className={theme == 'dark'? "iconDark": "iconLight"} size={20} />
              </a>
            </li>
            <li>
            <a href="https://www.frontendmentor.io/profile/xtirian" target="_blank">
              <SiFrontendmentor className={theme == 'dark'? "iconDark": "iconLight"} size={20} />
              </a>
            </li>
            <li>
            <a href="https://github.com/xtirian" target="_blank">
              <FaGithub className={theme == 'dark'? "iconDark": "iconLight"} size={20} />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/xtirian" target="_blank">
                <FaCodepen className={theme == 'dark'? "iconDark": "iconLight"} size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
