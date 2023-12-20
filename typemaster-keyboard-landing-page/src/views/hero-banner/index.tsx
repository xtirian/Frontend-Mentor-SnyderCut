import React from "react";
import "./style.scss";
import Button from "@/components/button";

const HeroBanner = () => {
  return (
    <section className="hero_banner-container">

      <div className="pattern_hero"></div>
      <div className="hero_banner-content">
        <h1>Typermaster Keyboard</h1>
        <p>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="hero_banner-button_grid">
          <Button buttonType={1} />
          <span>Release On 5/27</span>
        </div>
      </div>

      <div className="hero_banner-image">
        <img src="/images/mobile/image-keyboard.jpg" alt="herobanner" />
      </div>
    </section>
  );
};

export default HeroBanner;
