class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/pizzsauce.jpg");
    
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else{
      this.image=loadImage("pizza.jpg");
      Matter.Body.setStatic(this.body,true);
      
      
    }
    
  }
};
