var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan (el1, el2, callback) {
  console.log("First el: " + el1);
  console.log("Second el: " + el2);

  reader.question("First number greater than second?", function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
};

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if ( i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });

  }

  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
