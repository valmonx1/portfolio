import React from "react";

const Link = props => {
  return (
    <div className={props.page}>
      <h3>{props.num}</h3>
      <svg
        className="slide"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <a href={props.link}>
          <circle cx="6" cy="6" r="6" fill="white" />
        </a>
      </svg>
    </div>
  );
};

export default Link;
