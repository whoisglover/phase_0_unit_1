// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Danny Glover	
//  2. Martin Lear



/*Pseudocode

1.)
We will first create a object named Client with the 3 properties name, age and qoute.

2.)
We will create an array and fill it with the new actor information.

3.)
We will create a constructer function for the Client object created earlier.

4.)
We will display the information of the clients on screen.

*/


// 1. "YOU SIGNED... WHO?!"

var George = {name: "George Clooney", age: 52, qoute: "Ninety percent of films are pretty mediocre, but they have a built-in audience and open on 3,000 screens."};


// 2. "Here they Come!" // 3. "TIME IS MONEY!"

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.display = function() {
      console.log("My name is " + this.name + " I am " + this.age + " and my favorite quote is: " + this.quote);
    }
}

var Adam = new Client("Adam Sandler", 47, "go home ball");

var Kristen  = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");

var Jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var clientList = [Adam, Kristen, Jim];





//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"


for(var i=0; i<clientList.length; i+=1){
    clientList[i].display();
}


// ** BONUS **


//  Your Reflection:











