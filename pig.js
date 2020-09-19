class Pig {
    // to give the arguments to make objects of differnt size and shape
    constructor(x, y) {
      var options = {
          //bouncieness
          'restitution':0.8,
          //the force acting between two objects
          'friction':1,
          // mass or weight of the object
          'density':1.0
      }
      // to make the objects body
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      // to add the members to the world
      World.add(world, this.body);
    }
    display(){
    //to name space it 
      var pos =this.body.position;
      var angle = this.body.angle
      //to capture the new settings
      push();
      //it will change the position while thw change is being made 
      translate(pos.x,pos.y);
      // to rotate the angle of the object
      rotate(angle);
      //to make the position of the object in the middle
      rectMode(CENTER);
      fill("pink");
      rect(0, 0, this.width, this.height);
      //to revert to the old settings
      pop();
  
    }
  }