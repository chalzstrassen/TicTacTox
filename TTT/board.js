var Board = function () {
  this.grid = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];
};

Board.prototype.render = function () {
  this.grid.forEach(function (el) {
  	console.log(JSON.stringify(el));
  });
};

Board.prototype.isWon = function (token) {
  //check rows
  this.grid.forEach(function (row, idx, arr){
  	if (row.every(function (el) { return el === token;})) {
  		return true;
  	} else if ()

  });
};