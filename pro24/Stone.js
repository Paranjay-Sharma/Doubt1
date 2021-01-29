class stone{
    constructor(){
     var options = {
       'restitution':0.5,
       'friction':1.0,                
       'density':2.0                     
                   
     }
    this.body=Bodies.rectangle(200,200,50,25,options);
    this.width = 50;
    this.height= 25;
    
    World.add(world,this.body);
    
    }
    
    display(){
    push();
      var pos =this.body.position;
      var angle =this.body.angle;
    translate(pos.x,pos.y);
    
    
    rectMode(CENTER);
    fill("brown");
    
    
      rect(0,0,this.width,this.height);
    pop();
    }
    }
