import React from "react";
import { render } from "react-dom";
import VideoPlayer from "./VideoPlayer";
import Token from "./services/token.js";
import "./video.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "/small.mp4",
      type: "video/mp4"
    }
  ]
};

const App = () => (
  <div style={styles}>
    <VideoPlayer {...videoJsOptions} />
  </div>
);
Token.getToken();
render(<App />, document.getElementById("root"));
