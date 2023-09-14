import React from "react";
import "./home.scss";

//COMPONENTS
import ButtonR from "../../components/elements/Button-Right/ButtonR";
import Footer from "../../components/section/Footer/Footer";

const Home = () => {
  return (
    <main>
      <div className="home_container">
        <aside className="home_container-hero_container">
          <div className="hero-desktop-pattern">
          <h1 className="home_container-title pattern-desktop">
            Modern <br /> Art Gallery
          </h1>
          </div>
          <div className="hero-img"></div>
        </aside>
        <section>
          <h1 className="home_container-title title-desktop">
            Modern <br /> Art Gallery
          </h1>
          <p className="home_container-content">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <ButtonR>Our Location</ButtonR>
        </section>
      </div>

      <div className="gallery_container">
        <div className="gallery_container-line1">
          <div className="gallery_grid1 gallery-card"></div>
          <section className="gallery_grid-sect1">
            <h2 className="gallery_grid-sect1-title">
              your day at the gallery
            </h2>
            <p className="gallery_grid-sect1-content">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </section>
        </div>

        <div className="gallery_container-line2">
          <div className="gallery_grid2 gallery-card"></div>
          <div className="gallery_container-line2_column">
            <div className="gallery_grid3 gallery-card"></div>
            <section className="gallery_grid-sect2">
              <h3 className="gallery_grid-sect2-title">Come & be Inspired</h3>
              <p className="gallery_grid-sect2-content">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer theme="dark" />
    </main>
  );
};

export default Home;
