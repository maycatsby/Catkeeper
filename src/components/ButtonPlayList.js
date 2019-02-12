import React from "react";
import ButtonPlay from "./ButtonPlay";

class ButtonPlayList extends React.Component {
  playerScore(roundScore) {
    const winnerScore = this.props.points.pathLength * 5;
    const score = this.props.points.score + roundScore;
    const paw = score >= 0 ? Math.floor(score / 5) : 0;
    const playerStatus = score >= winnerScore ? "Winner" : 0;
    const resume = playerStatus === "Winner" ? 1 : 0;
    return { roundScore, score, paw, playerStatus, resume };
  }

  renderList() {
    const FoodBtnScore = Math.floor(Math.random() * 4) + 1;
    const CatnipBtnScore = Math.round(Math.random() * -6 + Math.random() * 8);
    const button = [
      { icon: "pizza", btnScore: FoodBtnScore },
      { icon: "beer", btnScore: CatnipBtnScore }
    ];
    return button.map((cur, index) => (
      <ButtonPlay
        icon={cur.icon}
        key={index}
        onClickArg={this.playerScore(cur.btnScore)}
        points={this.props.points}
      />
    ));
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default ButtonPlayList;
