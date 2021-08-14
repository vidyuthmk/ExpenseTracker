import React from "react";
import { useRef, useEffect } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const values = [100, 100, 340, 320, 500, 50, 45, 385, 95, 120, 90, 20];
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  const drawChart = (data, padding) => {
    const max = Math.max.apply(Math, data);
    const chart = ref.current;
    console.log(chart);
    const barwidth =
      (chart.offsetWidth - (values.length - 1) * padding - data.length * 10) /
      data.length;
    console.log(barwidth);
    let left = 0;

    for (let i in data) {
      let newbar = document.createElement("div");
      newbar.setAttribute("class", "bar");
      newbar.style.width = barwidth + "px";
      newbar.style.height = (data[i] / max) * 100 + "%";
      newbar.style.left = left + "px";
      chart.appendChild(newbar);
      left += barwidth + padding + 10;
      props.OnChangeDiv(newbar);
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
          checked
        />
        <label for="opt1" class="option">
          2019
        </label>
        <input className="selectopt" name="test" type="radio" id="opt2" />
        <label for="opt2" class="option">
          2020
        </label>
        <input className="selectopt" name="test" type="radio" id="opt3" />
        <label for="opt3" class="option">
          2021
        </label>
        <input className="selectopt" name="test" type="radio" id="opt4" />
        <label for="opt4" class="option">
          2022
        </label>
        <input className="selectopt" name="test" type="radio" id="opt5" />
        <label for="opt5" class="option">
          2023
        </label>
      </div>
      <div
        id="chart"
        ref={(el) => {
          ref.current = el;
        }}
      ></div>
    </div>
  );
};

export default ExpenseFilter;
