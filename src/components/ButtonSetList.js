import React from "react";
import { connect } from "react-redux";
import { settings, reset } from "../actions";
import ButtonSet from "./ButtonSet";

const ButtonSetList = props => {
  const buttonName = [
    { name: <ion-icon name="refresh" />, action: props.reset },
    { name: <ion-icon name="settings" />, action: props.settings }
  ];
  const buttonList = buttonName.map((cur, index) => (
    <ButtonSet
      btnName={cur.name}
      btnType="btn-circle"
      key={index}
      onClick={cur.action}
    />
  ));

  return <div>{buttonList}</div>;
};

export default connect(
  null,
  { reset, settings }
)(ButtonSetList);
