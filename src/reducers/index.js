import { combineReducers } from "redux";

const contextDisplay = (resume = 1, action) => {
  if (action.type === "NEW_GAME") {
    resume = 0;
  } else if (action.type === "SETTINGS") {
    resume = 1;
  }
  return resume;
};

const typedHouseReducer = (typedHouse = 7, action) => {
  if (action.type !== "TYPE_OF_HOUSE") {
    return typedHouse;
  }

  switch (action.payload) {
    case "small":
      return (typedHouse = 5);
    case "middle":
      return (typedHouse = 7);
    case "big":
      return (typedHouse = 9);
  }
};

const gameReducer = (
  initialState = [
    {
      player: "Keeper 1",
      score: 0,
      pathLength: 7,
      pawAmount: 0,
      active: 1,
      playerStatus: 0
    },
    {
      player: "Keeper 2",
      score: 0,
      pathLength: 7,
      pawAmount: 0,
      active: 0,
      playerStatus: 0
    }
  ],
  action
) => {
  switch (action.type) {
    case "NEW_GAME":
      return initialState.map((el, index) => {
        el.player =
          action.payload.player[index] === ""
            ? `Keeper ${index + 1}`
            : action.payload.player[index];
        el.roundScore = "a";
        el.score = 0;
        el.pathLength = action.payload.house;
        el.pawAmount = 0;
        el.playerStatus = 0;
        return el;
      });
    case "RESET":
      return initialState.map((el, index) => {
        el.roundScore = "a";
        el.score = 0;
        el.pawAmount = 0;
        el.active = index === 0 ? 1 : 0;
        el.playerStatus = 0;
        return el;
      });
    case "BTN_PLAY":
      return initialState.map(cur => {
        if (cur.active === 1) {
          cur.roundScore = action.payload.roundScore;
          cur.score = action.payload.score;
          cur.circleAmount = action.payload.circle;
          cur.pawAmount = action.payload.paw;
          cur.active = 0;
          cur.playerStatus = action.payload.playerStatus;
          return cur;
        } else {
          cur.active = 1;
          return cur;
        }
      });

    default:
      return initialState;
  }
};

export default combineReducers({
  typedHouse: typedHouseReducer,
  game: gameReducer,
  resume: contextDisplay
});
