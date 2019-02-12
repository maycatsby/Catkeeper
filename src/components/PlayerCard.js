import React from "react";
import "./PlayerCard.css";
import ButtonPlayList from "./ButtonPlayList";
import CommentArea from "./CommentArea";
import CatPath from "./CatPath";

const PlayerCard = ({ name, points, classNumber }) => {
  const playerName =
    points.playerStatus === "Winner" ? points.playerStatus : points.player;
  return (
    <div
      className="player-card"
      style={{
        backgroundColor:
          points.active === 1
            ? " rgba(231, 114, 187, 0.151)"
            : " rgba(255, 255, 255, 0.336)"
      }}
    >
      <div
        className={`player-card__active player-card__active--${classNumber}`}
        style={{
          visibility: points.active === 1 ? " visible" : "hidden"
        }}
      />
      <h3>{playerName}</h3>
      <div className="player-card__score">Total score: {points.score}</div>
      <div className="player-card__content clearfix">
        <CatPath points={points} />
        <CommentArea
          roundScore={points.roundScore}
          status={points.playerStatus}
        />
      </div>

      <div className="player-card__buttons">
        <ButtonPlayList points={points} />
      </div>
    </div>
  );
};

export default PlayerCard;
