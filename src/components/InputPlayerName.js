import React from "react";
import { connect } from "react-redux";
import ButtonSet from "./ButtonSet";
import { newGame } from "../actions";

import "./InputPlayerName.css";

class inputPlayerName extends React.Component {
  constructor(props) {
    super(props);

    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
  }

  onClick = () => {
    this.props.newGame({
      player: [this.textInput1.current.value, this.textInput2.current.value],
      house: this.props.typedHouse
    });
  };
  renderInputList() {
    const inputs = [this.textInput1, this.textInput2];
    return inputs.map((cur, index) => {
      return (
        <input
          ref={cur}
          className="playerName__input"
          key={`input ${index}`}
          type="text"
          maxLength="13"
          placeholder={`Keeper ${index + 1} name`}
          spellCheck="false"
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form className="playerName" onSubmit={e => e.preventDefault()}>
          {this.renderInputList()}
        </form>
        <ButtonSet btnName="Start Game" onClick={this.onClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { typedHouse: state.typedHouse, game: state.game };
};

export default connect(
  mapStateToProps,
  { newGame }
)(inputPlayerName);
