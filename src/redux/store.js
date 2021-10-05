const redux = require("redux");
const rootReducer = require("./reduce");
const reduxLogger = require("redux-logger");

module.exports = redux.createStore(rootReducer);
