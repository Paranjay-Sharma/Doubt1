class plane{
    constructor(){
     var options = {
       'restitution':0.5,
       'friction':1.0,                
       'density':2.0 ,
       'setStatic':false                    
                   
     }
    this.body=Bodies.rectangle(this.position.x,this.position.y,50,50,options);
    this.width = 50;
    this.height= 50;
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
