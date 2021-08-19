import React from "react";
import "./CharBar.css";

const CharBar = (props) => {
  console.log(props.value);
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  const barwidth = 15 + "px";
  const pad = 10 + "px";
  return (
    <div
      className="bar"
      style={{ height: barFillHeight, width: barwidth }}
    ></div>
  );
};

export default CharBar;
