import React from "react";
import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";
import "./PlayerCard.css";

const PlayerCardList = ({ game }) => {
  const playerName = [game[0].player, game[1].player];
  const playerList = playerName.map((cur, index) => (
    <PlayerCard
      key={cur}
      name={cur}
      points={game[index]}
      classNumber={index + 1}
    />
  ));
  return <div className="clearfix">{playerList}</div>;
};

const mapStateToProps = state => {
  return { game: state.game };
};

export default connect(mapStateToProps)(PlayerCardList);
