/*
  src/components/HomeSection.tsx

  Purpose:
  - Home section with personal introduction and photo
*/

import type { JSX } from "react";
import ianPhoto from "../assets/ianphoto.png";

export function HomeSection(): JSX.Element {
  return (
    <div id="home" className="container">
      <div className="left-box">
        <h2>hey, i'm</h2>
        <h1>Ian Xiong!</h1>
        <img src={ianPhoto} alt="Ian Xiong" />
        <p className="caption">
          trying <i>le clocher penché</i> in québec city!
        </p>
      </div>
      <div className="right-box">
        <p className="textbox">
          I study <b>systems design engineering</b> @ UWaterloo and I love
          creating cool things.
        </p>
        <br></br>
        <p className="textbox">
          I'm currently developing <b>automation software</b> packages at
          Lumentum for telecommunications.
        </p>
        <br></br>
        <p className="textbox">
          I'm also spearheading a <b>6-bar linkage</b> roof-tilt for
          Waterloo's solar EV team, Midnight Sun.
        </p>
        <br></br>
        <p className="textbox">
          Outside of creating, I'm an avid soccer player, write rap verses,
          and a self-acclaimed food connoisseur!
        </p>
      </div>
    </div>
  );
}