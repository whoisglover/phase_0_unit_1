// I worked with Matt Kuzio on this challenge

/* Your mission description:
 The object of this mission is to get through a maze by guiding your character using the 
 commands up, down, right, and left.


// Pseudocode
// Create a character with a name, age, gender, health-points, position
// Create the commands up, down, left and right
// 
// 
// 
*/
// Initial Code


function newChar (charName, age, gender, hp, positionX, positionY){
    this.name = charName;
    this.age = age;
    this.gender = gender;
    this.hp = hp;
    this.positionX = positionX;
    this.positionY = positionY;
    
    this.moveUp = function(){
      this.positionY += 10;
    } 
    
    this.moveDown = function(){
     this.positionY -= 10;  
    }
    
    this.moveLeft = function(){
      this.positionX -= 10;
    } 
    
    this.moveRight = function(){
     this.positionX += 10;  
    }
}

var Hulk = new newChar("Hulk", 35, "Male", 10, 0,0);
var Superman = new newChar("Superman", 43, "Male", 10, 0,0);

console.log(Hulk.positionX);
Hulk.moveRight();
console.log(Hulk.positionX);


//Reflection 
/* 
This challenge was completed during a pairing session with Matt Kuzio. In all aspects it was 
a really successful pairing.  We had a good intro and discussed our opinions on the differences
between driving and navigating.  We then moved onto the pseduo code and discussed what we thought
the goal of the challenge was.  We started with Matt navigating since he said he hadn't been able to
in his previous pairings. The code turned out pretty good and my instructors advice from GPS 1.2
was to test early and often which helped Matt and I here.  After about 20 minutes we switched roles
and were able to finish the main code for the character object.  Then we did some basic displaying
to make sure that our built in functions for movement were working correctly.  We wrapped it up in just 
about an hour and I would say I have very little suggestions for how the pairing couldve gone better.
We also spent some time discussing the terminal on mac and I was able to share some of my experience
navigating the command line with Matt which I hope will help him in the future.

*/
