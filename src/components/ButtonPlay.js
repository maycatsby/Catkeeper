import React from "react";
import { connect } from "react-redux";
import { btnPlay } from "../actions";
import "./Buttons.css";

const ButtonPlay = props => {
  return (
    <button
      style={{ visibility: props.points.active === 1 ? "visible" : "hidden" }}
      className="btn btn-play"
      onClick={() => {
        if (
          props.player1Status === 0 &&
          props.player2Status === 0 &&
          props.points.active === 1
        ) {
          props.btnPlay(props.onClickArg);
        } else {
          return false;
        }
      }}
    >
      <ion-icon name={props.icon} />
    </button>
  );
};

const mapStateToProps = state => {
  return {
    player1Status: state.game[0].playerStatus,
    player2Status: state.game[1].playerStatus
  };
};
export default connect(
  mapStateToProps,
  { btnPlay }
)(ButtonPlay);
