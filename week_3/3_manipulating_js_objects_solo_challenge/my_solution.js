// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
 
  declare var adam and set equal to keyword 'Object'

2. Give adam a name property with the value "Adam".

  Use dot notation and equals to set adam.name to 'Adam'

3. Add a spouse property to terah and assign it the value of adam.

  Use dot notation to add property spouse to terah and set equal to adam
    
4. Change the value of the terah weight property to 125.
  Use dot notation to set terah.weight equal to 125

5. Remove the eyeColor property from terah.

  Use delete keyword to remove the eyeColor property from Terah

6. Add a spouse property to adam and assign it the value of terah.

  use dot notation to add spouse to adam, set equal to terah
    

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
  
  repeat step 1, use dot notation to create property children and set equal to keyword Object
    

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
      Use chained dot notation to create carson with name property equal to "Carson"
     
      edit: First define carson to equal {} for type Object then define carson's name property and set to "Carson"
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
    Do the same as Carter but this time try putting the name  "Carter" inside of the {} after  defining carter property
    edit: for property declaration/initialization use colon i.e.  name: "Carter"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    
    Repeat step 9 but replace Carter with Colton
11. Add a children property to adam and assign it the value of terah children.
      Use dot notation to create children property on adam object and set equal to terah's children property (dot notation)


*/

// __________________________________________
// Write your code below.

var adam={};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = Object;
terah.children.carson={};
terah.children.carson.name = "Carson";
terah.children.carter= {name : "Carter"};
terah.children.colton= {name : "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
/*
  - Again working step by step and not looking ahead seemed to work very well for error checking.  I faced the problem of what I thought
was a perfect answer still not compiling correctly.  I solved this by either starting the test from scratch or walking away for a few
minutes to clear my mind and realize an obvious mistake I was making.
I was unsure of how to delete an object's property.  I first checked the intro documents provided but didn't find it so I did a google search that led to a stack overflow post on how deleting an object's property worked. 
I am not having trouble with any of the concepts thus far.  This challenge was trickier than the previous one but didn't provide any 
major roadblocks.  In terms of new skills or tricks I have much more confidence creating new object properties and even nested object properties.
I feel very confident with the learning objectives.  I feel good about creating and manipulating local variables as well as following
test driven development methodologies. Again I enjoyed following the errors from each test to the next.  Focusing in on an exact error seems to be 
much more enjoyable than stressing about what the big picture of the application looks like. I didn't Find any parts of the challenge tedious.



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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
