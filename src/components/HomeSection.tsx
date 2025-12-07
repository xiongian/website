import type { JSX } from "react";
import ianPhoto from "../assets/ianphoto.png";

export function HomeSection(): JSX.Element {
  return (
    <section id="home" className="home-section">
      <div className="container home-hero">
        <div className="hero-persona">
          <h2>hey, i'm</h2>
          <h1>Ian Xiong!</h1>
          <img src={ianPhoto} alt="Ian Xiong" />
          <p className="caption">
            trying <i>le clocher penché</i> in québec city!
          </p>
        </div>
        <div className="hero-description">
          <p className="textbox">
            I study <b>systems design engineering</b> @ UWaterloo and I love
            creating cool things.
          </p>
          <p className="textbox">
            I'm currently developing <b>automation software</b> packages at
            Lumentum for telecommunications.
          </p>
          <p className="textbox">
            I'm also spearheading a <b>6-bar linkage</b> roof-tilt for
            Waterloo's solar EV team, Midnight Sun.
          </p>
          <p className="textbox">
            Outside of creating, I'm an avid soccer player, write rap verses,
            and a self-acclaimed <a href="https://beliapp.co/app/ianxiong" target="_blank" rel="noopener noreferrer">food connoisseur</a>!
          </p>
        </div>
      </div>
    </section>
  );
}