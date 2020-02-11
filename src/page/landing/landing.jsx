import React from "react";
import NavBar from "../../component/nav/nav";
import "./landing.css";

const Landing = props => {
  return (
    <>
      <NavBar title="HELLO" />
      <section id={props.id} className="page bio">
        <div className="details">
          <h3>Muhammad Nabil</h3>
          <h2>Front End Developer</h2>
        </div>
        <div className="hero">
          <img
            className="gambar"
            src={require("../../img/aku.jpg")}
            alt="model"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
