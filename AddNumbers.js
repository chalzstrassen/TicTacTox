var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter number to add", function (answer) {
      sum += parseInt(answer);
      console.log("Partial sum: " + sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }

  else {
    completionCallback(sum);
  }
};


addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
