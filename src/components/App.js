import React from "react";
import { connect } from "react-redux";
import PlayerCardList from "./PlayerCardList";
import ButtonSelect from "./ButtonSelect";
import ButtonSetList from "./ButtonSetList";

import InputPlayerName from "./InputPlayerName";
import "./App.css";

const App = props => {
  const inactive_game = props.resume ? "inactive" : "";
  const inactive_context = props.resume ? "" : "inactive";

  return (
    <div className="main-container">
      <div className={`main-container__popup ${inactive_context}`}>
        <h1 className="main-container__heading ">CATKEEPER</h1>
        <div className="main-container__panel">
          <div className="main-container__panel__settings">
            <h3 className="main-container__heading--small ">Game Settings</h3>
            <ButtonSelect />
            <InputPlayerName />
          </div>
        </div>
      </div>
      <div className={`main-container__players ${inactive_game}`}>
        <PlayerCardList />
      </div>
      <div className={`main-container__buttons ${inactive_game}`}>
        <ButtonSetList />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resume: state.resume
  };
};
export default connect(mapStateToProps)(App);
