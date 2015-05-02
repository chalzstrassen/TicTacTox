require('./board');

var Game = function (reader) {
  this.token = "x";
  this.board = new Board();

}

Game.prototype.grid = function () {
  return this.board.grid;
}
Game.prototype.run = function (completionCallback) {

};
