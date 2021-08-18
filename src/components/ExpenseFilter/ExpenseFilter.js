import React from "react";
import { useRef, useEffect } from "react";
import "./ExpenseFilter.css";
import YearPicker from "./YearPicker";

const ExpenseFilter = (props) => {
  // const [datapoints, setdatapoints] = useState();
  const chartDataPoints = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "APR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUN", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
  for (const expense in props.newFilter) {
    const expenseMonth = props.newFilter[expense].date.getMonth();
    chartDataPoints[expenseMonth].value += props.newFilter[expense].amount;
    console.log();
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const month = chartDataPoints.map((dataPoint) => dataPoint.label);

  // const values = [100, 100, 340, 320, 500, 50, 45, 385, 95, 120, 90, 20];
  const ref = useRef();
  const monref = useRef();

  useEffect(() => {
    if (ref.current === undefined && monref.current === undefined) {
      return;
    } else {
      const drawChart = (data, padding, month) => {
        const max = Math.max.apply(Math, data);
        const chart = ref.current;
        console.log(chart);
        const mon = monref.current;
        const barwidth =
          (chart.offsetWidth -
            (dataPointValues.length - 1) * padding -
            data.length * 10) /
          data.length;
        console.log(barwidth);
        let left = 0;
        for (let i = 0; i < data.length; i++) {
          let newbar = document.createElement("div");
          newbar.setAttribute("class", "bar");
          newbar.style.width = barwidth + "px";
          newbar.style.height = (data[i] / max) * 100 + "%";
          newbar.style.left = left + "px";
          chart.appendChild(newbar);
          left += barwidth + padding + 10;
          let newDiv = document.createElement("div");
          let divElement = document.createTextNode(month[i]);
          newDiv.setAttribute("class", "mondiv");
          newDiv.appendChild(divElement);
          mon.appendChild(newDiv);
        }
      };
      drawChart(dataPointValues, 15, month);
    }
  }, [ref, dataPointValues]);

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
        }}
      ></div>
      <div
        className="month1"
        ref={(el) => {
          monref.current = el;
        }}
      ></div>
    </div>
  );
};

export default ExpenseFilter;
