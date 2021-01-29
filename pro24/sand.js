class Smallball{
constructor(x,y){
 var options = {
   'restitution':0.5,
   'friction':1.0,                
   'density':2.0                     
               
 }
this.body=Bodies.ellipse(x,y,5,5,options);
this.width = 5;
this.height= 5;

World.add(world,this.body);

}

display(){
push();
  var pos =this.body.position;
  var angle =this.body.angle;
translate(pos.x,pos.y);


rectMode(CENTER);
fill("brown");


ellipse(0,0,this.width,this.height);
pop();
}
}
    
















