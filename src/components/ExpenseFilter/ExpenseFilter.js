import React from "react";
import { useRef, useEffect, useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const values = [100, 100, 340, 320, 500, 50, 45, 385, 95, 120, 90, 20];
  const [refState, setrefState] = useState();
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current = refState;
    console.log(ref.current);
  }, [refState]);

  const drawChart = (data, padding) => {
    if (ref.current === undefined) {
      return;
    } else {
      const max = Math.max.apply(Math, data);
      const chart = ref.current;
      const barwidth =
        (chart.offsetWidth - (values.length - 1) * padding - data.length * 10) /
        data.length;
      console.log(barwidth);
      let left = 0;
      for (let i = 0; i <= data.length; i++) {
        let newbar = document.createElement("div");
        newbar.setAttribute("class", "bar");
        newbar.style.width = barwidth + "px";
        newbar.style.height = (data[i] / max) * 100 + "%";
        newbar.style.left = left + "px";
        chart.appendChild(newbar);
        left += barwidth + padding + 10;
        props.OnChangeDiv(newbar);
      }
    }
  };
  drawChart(values, 15);

  return (
    <div className="wrapper1">
      <div className="select" tabIndex="1">
        <input
          className="selectopt"
          name="test"
          type="radio"
          id="opt1"
          defaultChecked
        />
        <label htmlFor="opt1" className="option">
          2019
        </label>
        <input className="selectopt" name="test" type="radio" id="opt2" />
        <label htmlFor="opt2" className="option">
          2020
        </label>
        <input className="selectopt" name="test" type="radio" id="opt3" />
        <label htmlFor="opt3" className="option">
          2021
        </label>
        <input className="selectopt" name="test" type="radio" id="opt4" />
        <label htmlFor="opt4" className="option">
          2022
        </label>
        <input className="selectopt" name="test" type="radio" id="opt5" />
        <label htmlFor="opt5" className="option">
          2023
        </label>
      </div>
      <div
        id="chart"
        ref={(el) => {
          ref.current = el;
          setrefState(el);
        }}
      ></div>
    </div>
  );
};

export default ExpenseFilter;
