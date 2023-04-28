import React from "react";
import { createRoot } from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./index.scss";

const RootElement = document.getElementById("root");
const Root = createRoot(RootElement);

Root.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
