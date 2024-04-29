import React, { useState, useEffect, Suspense } from "react";
import "./App.scss";
// import Header from './Header/Header';
import AnimatedCursor from "react-animated-cursor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Banner = React.lazy(() => import("./Banner/Banner"));
const WorkTraces = React.lazy(() => import("./WorkTraces/WorkTraces"));
const About = React.lazy(() => import("./About/About"));
const TimeLine = React.lazy(() => import("./TimeLine/TimeLine"));
const Footer = React.lazy(() => import("./Footer/Footer"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const Story = React.lazy(() => import("./Story/story"));

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
    <Suspense fallback={<div className="loader-wrap"><div className="loader"></div></div>}>
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
    </Suspense>
  );
};

export default App;
