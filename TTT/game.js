require('./board');

var Game = function (reader) {
  this.token = "x";
  this.board = new Board();

};

Game.prototype.placeToken = function (pos) {
  this.board.placeMark(pos, this.token)
  this.token = "o";
};

Game.prototype.isValidMove = function (pos) {
  if (this.board) {
    return false;
  } else {
    return true;
  }
}

Game.prototype.promptMove = function (callback) {
  this.board.render();
}

Game.prototype.run = function (completionCallback) {
  var game = this;

  this.promptMove(function (pos) {

  });

};
