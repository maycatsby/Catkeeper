export const typeOfHouse = value => {
  return {
    type: "TYPE_OF_HOUSE",
    payload: value
  };
};

export const newGame = values => {
  return {
    type: "NEW_GAME",
    payload: values
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};
export const settings = () => {
  return {
    type: "SETTINGS"
  };
};

export const btnPlay = playerResults => {
  return {
    type: "BTN_PLAY",
    payload: playerResults
  };
};

/*ACTION
NEW_GAME:
 -all scores = 0
 - circle amount = typedHouse
 - paws amount = 0
 - active player
ACTIVE PLAYER (wysyłane przy onclick )
FOOD
CATNIP
RESET
--TYPE_OF_HOUSE*/
