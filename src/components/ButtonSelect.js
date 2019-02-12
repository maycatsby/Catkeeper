import React from "react";
import { connect } from "react-redux";
import { typeOfHouse } from "../actions";
import "./Buttons.css";

const ButtonToSelect = props => {
  return (
    <select
      defaultValue="middle"
      className="btn-sel"
      onChange={event => props.typeOfHouse(event.target.value)}
    >
      <option value="small">Small House</option>
      <option value="middle">Middle House</option>
      <option value="big">Big House</option>
    </select>
  );
};
const mapStateToProps = state => {
  console.log(state);

  return { typedHouse: state.typedHouse };
};
const mapDispatchToProps = {
  typeOfHouse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonToSelect);
