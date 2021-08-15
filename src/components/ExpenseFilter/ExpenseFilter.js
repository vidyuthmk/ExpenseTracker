import React from "react";
import { useRef, useEffect, useState } from "react";
import "./ExpenseFilter.css";
import YearPicker from "./YearPicker";

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
      let left = 0;
      for (let i = 0; i <= data.length; i++) {
        let newbar = document.createElement("div");
        newbar.setAttribute("class", "bar");
        newbar.style.width = barwidth + "px";
        newbar.style.height = (data[i] / max) * 100 + "%";
        newbar.style.left = left + "px";
        chart.appendChild(newbar);
        left += barwidth + padding + 10;
      }
    }
  };
  drawChart(values, 15);
  const onChangeYearHandler = (yearChange) => {
    props.OnChangeDiv(yearChange);
  };
  return (
    <div className="wrapper1">
      <YearPicker
        selectedYear={props.selectedYear}
        onChangeYear={onChangeYearHandler}
      />
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
