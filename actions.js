require('isomorphic-fetch');
require('request');

var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
var getUserSuccess = function(user) {
    return {
        type: GET_USER_SUCCESS,
        user: user
    }
}

var GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
var getQuestionsSuccess = function(questions) {
    return {
        type: GET_QUESTIONS_SUCCESS,
        questions: questions
    }
}

var GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';
var getQuestionsError = function(questions) {
    return {
        type: GET_QUESTIONS_ERROR,
        error: error
    }
}

var MAKE_GUESS_SUCCESS = 'MAKE_GUESS';
var makeGuessSuccess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};

var BUTTON_CLICK = 'BUTTON_CLICK';
var buttonClick = function() {
    return {
        type: BUTTON_CLICK
    };
};

var makeGuess = function(guess, questionWord) {
    return function(dispatch) {
        var url = 'http://localhost:3000/flashcards/check/5773d46625b4eec78af90275';
        var myHeaders = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      });
      var myInit = {
            method: 'post',
            body: {
                german: guess,
                english: questionWord
            },
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        }
        return fetch(url, myInit).then(function(res) {
            console.log('we are IN THE MAKEGUESS')

            console.log(res);
            if (res.status < 200 || res.status >= 300) {
                var error = new Error(response.statusText);
                error.res = res;
                throw error;
            }
            return res;
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data){
            console.log(data);
            makeGuess(data) //should be true/false;
        })

    } // TODO:  catching
}

// var getUser = function() {
//     return function(dispatch) {
//         var url = 'http://localhost:3000/user';
//         return fetch(url).then(function(res) {
//                 if (res.status < 200 || res.status >= 300) {
//                     var error = new Error(response.statusText);
//                     error.res = res;
//                     throw error;
//                 }
//                 return res;
//             })
//             .then(function(res) {
//                 return res.json();
//             })
//             .then(function(data) {
//                 return dispatch(
//                     getUserSuccess(data)
//                 );
//             }).catch(function(error) {
//                 return dispatch(
//                     getUserError(error)
//                 );
//             })
//     };
// }

var getQuestions = function() {
    return function(dispatch) {
        var url = 'http://localhost:3000/flashcards/5773d46625b4eec78af90275';
        return fetch(url).then(function(res) {
                if (res.status < 200 || res.status >= 300) {
                    var error = new Error(response.statusText);
                    error.res = res;
                    throw error;
                }
                return res;
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                return dispatch(
                    getQuestionsSuccess(data)
                );
            }).catch(function(error) {
                return dispatch(
                    getQuestionsError(error)
                );
            })
    };
}


exports.BUTTON_CLICK = BUTTON_CLICK;
exports.buttonClick = buttonClick;
exports.MAKE_GUESS_SUCCESS = MAKE_GUESS_SUCCESS;
exports.makeGuessSuccess = makeGuessSuccess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.GET_QUESTIONS_SUCCESS = GET_QUESTIONS_SUCCESS;
exports.getQuestionsSuccess = getQuestionsSuccess;
exports.GET_QUESTIONS_ERROR = GET_QUESTIONS_ERROR;
exports.getQuestionsError = getQuestionsError;

exports.getQuestions = getQuestions;
exports.makeGuess = makeGuess;
