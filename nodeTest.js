var actions = require('./actions');
var store = require('./store');

// store.dispatch(actions.getQuestions());
store.dispatch(actions.makeGuess("Pferd", "horse"));
