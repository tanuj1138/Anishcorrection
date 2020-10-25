
class ball{
    constructor(x, y, d1) {

        var options = {
            
            isStatic:false,
            restitution:1
            

         }
         this.d1 = d1;
         this.x=x;
         this.y=y;
         this.body = Bodies.circle(x, y, d1, options);
       
       

        World.add(world, this.body);
      }

      display(){
        var pos1 =this.body.position;
        
        push()
        translate(pos1.x, pos1.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.d1, this.d1);
        pop()
        
      }

}