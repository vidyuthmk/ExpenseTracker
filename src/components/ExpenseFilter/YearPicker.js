import React from "react";
import "./YearPicker.css";

const YearPicker = (props) => {
  const onChangeHandler1 = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div
      className="select"
      tabIndex="1"
      value={props.selectedYear}
      onChange={onChangeHandler1}
    >
      <input
        className="selectopt"
        name="test"
        type="radio"
        id="opt1"
        value="2019"
      />
      <label htmlFor="opt1" className="option">
        2019
      </label>
      <input
        className="selectopt"
        name="test"
        type="radio"
        id="opt2"
        value="2020"
      />
      <label htmlFor="opt2" className="option">
        2020
      </label>
      <input
        className="selectopt"
        name="test"
        type="radio"
        id="opt3"
        defaultChecked
        value="2021"
      />
      <label htmlFor="opt3" className="option">
        2021
      </label>
      <input
        className="selectopt"
        name="test"
        type="radio"
        id="opt4"
        value="2022"
      />
      <label htmlFor="opt4" className="option">
        2022
      </label>
      <input
        className="selectopt"
        name="test"
        type="radio"
        id="opt5"
        value="2023"
      />
      <label htmlFor="opt5" className="option">
        2023
      </label>
    </div>
  );
};

export default YearPicker;
