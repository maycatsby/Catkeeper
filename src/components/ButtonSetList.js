import React from "react";
import { connect } from "react-redux";
import { settings, reset } from "../actions";
import ButtonSet from "./ButtonSet";

const ButtonSetList = props => {
  const buttonName = [
    { name: "Reset", action: props.reset },
    { name: "Settings", action: props.settings }
  ];
  const buttonList = buttonName.map((cur, index) => (
    <ButtonSet btnName={cur.name} key={index} onClick={cur.action} />
  ));

  return <div>{buttonList}</div>;
};

export default connect(
  null,
  { reset, settings }
)(ButtonSetList);
