class Paper {
     constructor (x,y,r) {
         var options = {
             restitution: 0.5,
             friction: 30,
             density: 1.2
         }

         this.body = Bodies.circle(x,y,r,options)
         this.radius = r
         World.add(world,this.body)
         this.image = loadImage("sprites/paper.png")
         
     }

    display() {
        var pos = this.body.position
        fill(225);
        circle(ball.body.position.x,ball.body.position.y,70);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
        //circle(50,300,70)
    }

        

}