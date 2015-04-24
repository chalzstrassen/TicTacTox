var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function () {
  this.stacks = [[3,2,1], [], []];
  this.num_disks = this.stacks[0].length;
};

HanoiGame.prototype.isWon = function () {
  var game = this;

  for (var stack = 1; stack < game.stacks.length; stack++) {
    if (game.stacks[stack].length === game.num_disks) {
      return true;
    }
  }

  return false;
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  var endTower = this.stacks[endTowerIdx];
  var startTower = this.stacks[startTowerIdx];

  if (endTower.length === 0 && startTower.length > 0 ) {
    return true;
  }
  else if (startTower.length === 0) {
    return false;
  }
  else {
    if (endTower[endTower.length - 1] > startTower[startTower.length - 1]) {
      return true;
    }
    else {
      return false;
    }
  }
};

HanoiGame.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
    return false;
  }

  var disk = this.stacks[startTowerIdx].pop();
  this.stacks[endTowerIdx].push(disk);

  return true;
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
  console.log("Choose a tower! 0, 1, or 2 :p");
};

HanoiGame.prototype.promptMove = function(callback) {
  this.print();
  var game = this;
  reader.question("From stack: ", function (fromTower) {
    reader.question("To stack: ", function (toTower) {
      callback(parseInt(fromTower), parseInt(toTower));
    });
  });
};

HanoiGame.prototype.run = function(completionCallback) {
  var game = this;

  this.promptMove(function (fromTower, toTower) {
    if (!game.move(fromTower, toTower)) {
      console.log("Invalid move! Try again");
    }

    if (game.isWon()) {
      completionCallback();
    }
    else {
      game.run(completionCallback);
    }
  });
};

var game = new HanoiGame();
game.run(function () {
  game.print();
  console.log("You won!");
  reader.close();
});
