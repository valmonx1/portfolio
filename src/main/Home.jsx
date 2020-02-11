import React from "react";
import About from "../page/about/about";
import Education from "../page/education/education";
import Landing from "../page/landing/landing";
import Skill from "../page/skill/skill"
import Link from "../component/link/link";
import "../main.css";

const Home = () => {
  return (
    <>
      <div className="portfolio">
        <ul>
          <div className="pages">
            <Link page="page-1" num="01" link="#sec1" />
            <Link page="page-2" num="02" link="#sec2" />
            <Link page="page-3" num="03" link="#sec3" />
            <Link page="page-4" num="04" link="#sec4" />
          </div>
        </ul>
        <main>
          <Landing id="sec1" />
          <About id="sec2" />
          <Education id="sec3" />
          <Skill id="sec4" />
        </main>
      </div>
    </>
  );
};

export default Home;
