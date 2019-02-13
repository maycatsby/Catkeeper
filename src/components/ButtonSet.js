import React from "react";
import "./Buttons.css";

const ButtonSet = props => {
  return (
    <button className={`btn ${props.btnType}`} onClick={props.onClick}>
      {props.btnName}
    </button>
  );
};

export default ButtonSet;
