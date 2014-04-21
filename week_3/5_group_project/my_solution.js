//Test 1:
// I want to create a mini program called sum.

//Test 2:
// I have list of numbers.  The list contains an odd amount of numbers. I want the sum program to add all of these up and tell me what the sum is.

//Test 3:
// I have list of numbers.  The list contains an even amount of numbers. I want the sum program to add all of these up and tell me what the sum is.

//Test 4:
// I want to create a new mini program called mean.

//Test 5:
// I have the same list of numbers that is odd from case 2 and I want mean to give me the average of these numbers.

//Test 6:
// I have the same list of numbers that is even from case 3 and I want mean to give me the average of these numbers.

//Test 7:
// I want to create a new mini program called median.

//Test 8:
// I want the mini program median to give me the median value of a list of numbers with an odd amount.

//Test 9:
// I want the mini program median to give me the median value of a list of numbers with an even amount.


//I am Person 1 in the group after our group worked through the code this is our perfectly passing solution:

function sum (arr) {
  var total = 0;
  for(var i=0; i < arr.length; i++) {
    total+= arr[i];
  }
  return total;
}


function mean (arr) {
  var arraySum= sum(arr);
  return (arraySum/arr.length);
}

function median (arr) {
  var sortedArray= arr.sort();
  if (sortedArray.length%2===0) {
    return (((sortedArray[sortedArray.length/2])+(sortedArray[(sortedArray.length-2)/2]))/2)
  }
  else  {
    return sortedArray[(sortedArray.length-1)/2];
}
}


// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

"group.js" 98L, 1959C






