import React from "react";
import "./card.css";
import Button from "react-bootstrap/Button";

const Card = props => {
  return (
    <>
      <div className="box">
        <div className="content">
          <h2>{props.num}</h2>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <Button onClick={props.link}>Read More</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
