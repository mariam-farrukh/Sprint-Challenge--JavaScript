/* == Step 1: Base Constructor ==
  Create a class constructor function named CuboidMaker that accepts properties for length, width, and height
*/
/* == Step 2: Volume Method ==
    Create a method that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
*/
/* == Step 3: Surface Area Method ==
    Create another method that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
class CubeMaker{
 constructor (attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
 }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea(){
        return 2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */

const cube = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130
//changed to cube because cuboid was already declared, so testing the results.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.