import React from "react";
//import { connect } from "react-redux";
//import { typeOfHouse } from "../actions";
import "./Buttons.css";

const ButtonChecked = props => {
  return (
    <form className="btn-check">
      <input
        className="btn-check__input"
        id="big"
        type="checkbox"
        value="big"
      />
      <label for="big" className="btn-check__label">
        big house
      </label>

      <input
        className="btn-check__input"
        id="middle"
        type="checkbox"
        value="middle"
      />
      <label for="middle" className="btn-check__label">
        middle house
      </label>

      <input
        className="btn-check__input"
        id="small"
        type="checkbox"
        value="small"
      />
      <label for="small" className="btn-check__label">
        small house
      </label>
    </form>
  );
};

/*<select
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
};*/

export default ButtonChecked;
