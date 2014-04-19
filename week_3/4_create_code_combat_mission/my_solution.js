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




