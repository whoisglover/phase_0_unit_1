// I paired [by myself (Danny Glover)] on this challenge.




// Pseudocode
// Test 1: there is no variable called secretNumber.  Test 1 is checking if it is of type number so declare the variable to an integer number (4)
// Test 2: expecting the number to equal 7 so assign secretNumber to 7
// Test 3: expecting variable 'password' to exist and be a string, initialize 'password' to string 'danny' 
// Test 4: expecting password to equal string 'just open the door', reassign password to this string. Also that is what I say when someone asks for the password
// Test 5: expecting variable allowedIn to exist and be of type boolean, initialize allowedIn to True
// Test 6: expected allowedIn to be false, change value to False
// Test 7: error 'members not defined' define var members to empty array
// Test 8: expected first element of members to be 'John'.  Assign members[0] to string 'John'
// Test 9: expected fourth element of members array to be 'Mary'.  Assign members[3] to 'Mary'
// __________________________________________
// Write your code below.
 
var secretNumber = 4;
secretNumber =7;
var password = 'Danny';
password = 'just open the door';
var allowedIn = true;
allowedIn = false;
var members = [];
members[0]= 'John';
members[3]= 'Mary';

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

//the only refactoring I want to do to my code is change the name of allowedIn to isAllowedIn.  I believe any variable that holds a boolean should have its name preceded with is to give more readability
// other than this change I do not think my code needs any refactoring.  The variable names are obvious and obey mixedCase formatting (my favorite type)
var isAllowedIn = allowedIn;


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
/*

What parts of your strategy worked? What problems did you face?
  - My strategy was to not look ahead at all and simply fix the most current error even if it seemed obvious that the next step would require me to change it.  
    This worked well as I have found that the best strategy when facing an army of errors is to tackle the top or first error first and move on one step at a time.
What questions did you have while coding? What resources did you find to help you answer them?
  - The only question I had was where the variables were first initialized? Besides members I didn't get any undeclared errors even though I didn't see declarations before
    the tests started using variables.  I assumed for good practice I should initialize anyways.
What concepts are you having trouble with, or did you just figure something out? If so, what?
  - No concepts are giving me trouble thus far, prior programming experience helped out here.
Did you learn any new skills or tricks?
  -I did not.
How confident are you with each of the learning objectives?
  - I feel very confident. Although TDD is new to me I understand its concepts and variable declaration/manipulation is now second nature to me.
Which parts of the challenge did you enjoy?
  - I enjoyed all parts of the challenge.  I found it easy which made the confidence boost it provided to be enjoyable.
Which parts of the challenge did you find tedious?
  - None.

*/

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

