import React, { useState } from "react";

import "./App.scss";
// import Header from './Header/Header';
import Banner from "./Banner/Banner";
import WorkTraces from "./WorkTraces/WorkTraces";
import About from "./About/About";
import TimeLine from "./TimeLine/TimeLine";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Story from "./Story/story";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  return (
    <div className={theme}>
      {/* <Header /> */}
      <Banner />
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
