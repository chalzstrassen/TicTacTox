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
  var won = false;
  //check diagonals
  if (checkDiagonals(this.grid, token)) {
    won = true;
  }

  if (checkColumns(this.grid, token)) {
    won = true;
  }

  //check rows
  this.grid.forEach(function (row, idx, arr){
  	if (row.every(function (el) { return el === token;})) {
  		if (won) {
        return;
      } else {
        won = true;
      };
  	}
  });

  return won;
};

function checkDiagonals (thegrid, token) {
  if (thegrid[1][1] !== token) {
    return false;
  } else if (thegrid[1][1] === token &&
             thegrid[2][2] === thegrid[0][0] &&
             thegrid[2][2] === token){
               return true;
  } else if (thegrid[1][1] === token &&
             thegrid[0][2] === thegrid[2][0] &&
             thegrid[0][2] === token) {
               return true;
  } else {
    return false;
  }
};

function checkColumns (thegrid, token) {
  var won = false;
  [0,1,2].forEach(function (idx1) {
    var column = [];
    [0,1,2].forEach(function (idx2) {
      column.push(thegrid[idx2][idx1]);
    });
    if (column.every(function (el) { return el === token })) {
      won = true;
    };
  });
  return won;
}

grid = [
  ["x","",""],
  ["","o",""],
  ["","","x"]
];
