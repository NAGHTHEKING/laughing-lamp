class Rectangle {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body1 = Bodies.rectangle(x+100, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image= loadImage("sprites/dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,255,255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };