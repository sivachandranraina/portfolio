import React, { useState, useEffect } from "react";
import "./App.scss";
// import Header from './Header/Header';
import AnimatedCursor from "react-animated-cursor"
import Banner from "./Banner/Banner";
import WorkTraces from "./WorkTraces/WorkTraces";
import About from "./About/About";
import TimeLine from "./TimeLine/TimeLine";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Story from "./Story/story";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  useEffect(() => {
    if (localStorage.getItem("theme") === undefined)
      localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className={theme} >
      <AnimatedCursor
        innerSize={14}
        innerStyle={{
          mixBlendMode: 'exclusion'
        }}
        outerSize={28}
        color='255, 255, 255'
        outerAlpha={0}
        innerScale={1}
        outerScale={2}
        outerStyle={{
          border: '2px solid rgb(255, 255, 255)',
          mixBlendMode: 'exclusion'
        }}
      />
      {/* <Header /> */}
      <div className="theme-switch">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ fontSize: "2rem" }}
          ></FontAwesomeIcon>
        </div>
        <div>
          <label className="rocker rocker-small">
            <input
              type="checkbox"
              value={theme}
              checked={theme === "light"}
            />
            <span className="switch-left" onClick={() => setTheme("light")}>
              On
            </span>
            <span className="switch-right" onClick={() => setTheme("dark")}>
              Off
            </span>
          </label>
        </div>
      </div>
      <Banner theme={theme} />
      <About exportTheme={(data) => setTheme(data)} />
      <TimeLine />
      <WorkTraces />
      <Story />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
