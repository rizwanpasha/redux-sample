const ACTIONS = require("./action");

module.exports = (currentState = 0, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      {
        currentState++;
      }
      break;
    case ACTIONS.DECREMENT:
      {
        currentState--;
      }
      break;
  }

  return currentState;
};
