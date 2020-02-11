import React from "react";
import "./about.css";

const About = props => {
  return (
    <>
      <section id={props.id} className="about">
        <span class="tags"> &#60;body&#62;</span>
        <span className="tagline">&#60;h1&#62;</span>
        <h1 className="about-tag">About Me</h1>
        <span className="tagline-end">&#60;&#47;h1&#62;</span>
        <div className="wrapper">
          <span className="tagline-paragraph">&#60;p&#62;</span>
          <p className="myself">
            I am an energetic and passionate person that aiming to gain work
            experience. Wanted to learn more about promming expecially related
            to Front End and will give a full commitment. Beside that, I am able
            to effectively coordinate tasks and maintain strong work ethic
          </p>
          <span className="tagline-paragraph-end">&#60;&#47;p&#62;</span>
        </div>
        <span class="tags-end"> &#60;&#47;body&#62;</span>
        <div className="box-wrapper">
          <div className="box-area">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>
            <div className="box6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
