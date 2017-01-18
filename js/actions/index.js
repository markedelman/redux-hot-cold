// guess number
// submit number
//

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    console.log("new game");
    return {
        type: NEW_GAME
    };
};

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
var toggleInfoModal = function() {
    console.log("Toggleinfo called");
    return {
        type: TOGGLE_INFO_MODAL,
    };
};

module.exports = {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal};
// exports.NEW_GAME = NEW_GAME;
// exports.newGame = newGame;
// exports.MAKE_GUESS = MAKE_GUESS;
// exports.makeGuess = makeGuess;
// exports.TOGGLE_INFO_MODAL = TOGGLE_INFO_MODAL;
// exports.toggleInfoModal = toggleInfoModal;
