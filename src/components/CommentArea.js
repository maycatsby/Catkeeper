import React from "react";
import "./CommentArea.css";

const CommentArea = ({ roundScore, status }) => {
  let content = "";
  const commentsBox = {
    bad: `Cat Frederick  hates this kind of catnip. He is about to come back on the roof and never back again!  In the eyes of Frederick you're looser, so you loose ${roundScore} points.`,
    medium: `This wasn't the worst thing which cat Frederick has ever eaten. Frederick gives you ${roundScore} points, so you should be grateful to him till the end of your life, human.`,
    good: `Cat Frederick loves this catnip. It is totally crazy now. You get ${roundScore} points.`,
    full: `It is hard to believe, but cat Frederick is full and needs to have a cat nap. It isn't interested in your poor bait, human.`,
    prevStep:
      "That's enough! Cat Frederick is so dissapointed of you. It takes 1 step back to give you some time for thinking over your behaviour.",
    nextStep:
      " Cat Frederick  appreciates your effort and decides to get 1 step towards you. That's one small step for cat, but giant leap for mankind.",
    newGame:
      "Try to take Frederick from the roof. You can give him cat food or catnip.",
    winner:
      "You are a winner - the cat gets your kitchen. Frederick should congratulate you, but it's to proud to do it. As a reward you must open the fridge full of tuna and invite there Frederick",
    looser:
      "You are real looser - by Frederick eye, you spend the rest of your days with something like dog. Frederick should feels sorry becouse of your failure, but it don't not care a hang"
  };
  if (!status) {
    switch (true) {
      case roundScore < -4: {
        content = `${commentsBox.bad} ${commentsBox.prevStep}`;
        break;
      }
      case roundScore >= -4 && roundScore < 0: {
        content = commentsBox.bad;
        break;
      }
      case roundScore === 0: {
        content = commentsBox.full;
        break;
      }
      case roundScore > 0 && roundScore < 5: {
        content = commentsBox.medium;
        break;
      }
      case roundScore >= 5: {
        content = `${commentsBox.good} ${commentsBox.nextStep}`;
        break;
      }
    }
  } else {
    content = commentsBox.winner;
  }

  return <div className="commentArea">{content}</div>;
};

export default CommentArea;
