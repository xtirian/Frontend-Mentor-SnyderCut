import React from "react";
import "./location.scss";

import Map from "../../components/elements/LeafMap/Map";
import Footer from '../../components/section/Footer/Footer'

import ButtonL from "../../components/elements/Button-Left/ButtonL";

const Location = () => {
  return (
    <div>
      <ButtonL>Back to Home</ButtonL>
      <Map />

      <div className="location_container">
        <section className="location_container-sect">
          <h2 className="location_container-sect_title">OUR LOCATION</h2>
          <div className="location_container-sect_grid">
          <span>Shopping Barra</span>
          <div >
            <p>
              Barra da Tijuca <br />
              RJ <br />
              Brazil
            </p>
          </div>
          <p className="location_container-sect_content">Our newly opened gallery is located near the City of Arts on América Avenue near to the Natural Park and Shopping Barra, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
          </div>
        </section>
      </div>

      <Footer theme="light" />
    </div>
  );
};

export default Location;
