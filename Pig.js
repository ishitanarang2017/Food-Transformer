class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/pizza base.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     this.image=loadImage("pizza.png");
     Matter.Body.setStatic(this.body,true);
     
     
   }
   
 }
score(){
  if(this.Visiblity<0&&this.Visiblity>-1005){
    score+=5;

  }
}


};