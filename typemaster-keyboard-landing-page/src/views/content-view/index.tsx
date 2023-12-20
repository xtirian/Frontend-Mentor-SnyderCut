import React from "react";
import "./style.scss";

const ContentView = () => {
  return (
    <section className="contet_view-container">
      <div className="contet_view-img_grid">
        <div className="hero-pattern1">
          <img
            src="/images/mobile/image-phone-and-keyboard.jpg"
            alt=""
            
          />
        </div>
        <div className="hero-pattern2">
          <img
            src="/images/mobile/image-glass-and-keyboard.jpg"
            alt=""            
          />
        </div>
      </div>
      <div className="contet_view-content">
        <h2>Mechanical wireless keyboard</h2>
        <p>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
      </div>
    </section>
  );
};

export default ContentView;
