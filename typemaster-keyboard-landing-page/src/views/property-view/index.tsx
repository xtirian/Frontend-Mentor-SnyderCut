import React from "react";
import './style.scss';

const PropertView = () => {
  return (
    <section className="propert_view-container">
      <div className="card_container">
        <img src="/images/shared/icon-compatible.jpg" alt="" />
        <h3>Highly <br />
        compatible</h3>
        <p>
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver needed.
        </p>
      </div>

      <div className="card_container">
        <img src="/images/shared/icon-bluetooth.jpg" alt="" />
        <h3>WIRELESS <br />
WITH BLUETOOTH</h3>
        <p>Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</p>
      </div>

      <div className="card_container">
        <img src="/images/shared/icon-battery.jpg" alt="" />
        <h3>HIGH CAPACITY<br />
BATTERY</h3>
        <p>Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.</p>
      </div>

      <div className="card_container">
        <img src="/images/shared/icon-light.jpg" alt="" />
        <h3>RGB BACKLIT <br />
MODES</h3>
        <p>Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</p>
      </div>
    </section>
  );
};

export default PropertView;
