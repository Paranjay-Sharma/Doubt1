class rubber{
    constructor(){
     var options = {
       'restitution':0.3,
       'friction':5.0,                
       'density':1.0                     
                   
     }
    this.body=Bodies.ellipse(50,40,40,40,options);
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
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    