import React from "react";
import "./Buttons.css";

const ButtonSet = props => {
  return (
    <button className="btn btn-set" onClick={props.onClick}>
      {props.btnName}
    </button>
  );
};

export default ButtonSet;
