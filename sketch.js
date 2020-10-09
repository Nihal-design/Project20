var car, car2, car3, car4;
var lane, lane2, lane3, lane4;
var wall;
var speed, weight;
var deformation;
var text1, text2, text3, text4;

function setup() {
  createCanvas(800,400);
  car=createSprite(780, 20, 20, 10);
  car2=createSprite(780,100,20,10);
  car3=createSprite(780,200,20,10);
  car4=createSprite(780,300,20,10);
  lane=createSprite(780,50,1600,5);
  lane2=createSprite(780,150,1600,5);
  lane3=createSprite(780,250,1600,5);
  lane4=createSprite(780,350,1600,5);
  wall=createSprite(5,200,5,800);
  speed=random(55,90);
  weight=random(400,1500);
  deformation=(0.5*speed*speed*weight)/22500;
  text1="Press space to accelerate";
  text2="Press 2 to accelerate";
  text3="Press 3 to accelerate";
  text4="Press 4 to accelerate";
}

function draw() {
  background("black");
  car.shapeColor="white";
  car2.shapeColor="white";
  car3.shapeColor="white";
  car4.shapeColor="white";
  lane.shapeColor="white";
  lane2.shapeColor="white";
  lane3.shapeColor="white";
  lane4.shapeColor="white";
  wall.shapeColor="white";

  if(keyDown("space")){
    car.addSpeed(speed,180);
  }

  if(keyDown("2")){
    car2.addSpeed(speed,180);
  }

  if(keyDown("3")){
    car3.addSpeed(speed,180);
  }

  if(keyDown("4")){
    car4.addSpeed(speed,180);
  }

  car.collide(wall);
  car2.collide(wall);
  car3.collide(wall);
  car4.collide(wall);

  if(car.x-wall.x === wall.width/2 + car.width/2 && deformation<80){
    car.shapeColor="green";
  }
  else if(car.x-wall.x === wall.width/2 + car.width/2 && deformation<180 && deformation>80){
    car.shapeColor="yellow";
  }
  else if(car.x-wall.x === wall.width/2 + car.width/2 && deformation>180){
    car.shapeColor="red";
  }
  else{
    car.shapeColor="white";
  }

  //Adding the same thing for car2. The code which I wrote for car1/car
  if(car2.x-wall.x === wall.width/2 + car2.width/2 && deformation<80){
    car2.shapeColor="green";
  }
  else if(car2.x-wall.x === wall.width/2 + car2.width/2 && deformation<180 && deformation>80){
    car2.shapeColor="yellow";
  }
  else if(car2.x-wall.x === wall.width/2 + car2.width/2 && deformation>180){
    car2.shapeColor="red";
  }
  else{
    car2.shapeColor="white";
  }

  //Adding the same thing for car3. The code which I wrote for car2
  if(car3.x-wall.x === wall.width/2 + car3.width/2 && deformation<80){
    car3.shapeColor="green";
  }
  else if(car3.x-wall.x === wall.width/2 + car3.width/2 && deformation<180 && deformation>80){
    car3.shapeColor="yellow";
  }
  else if(car3.x-wall.x === wall.width/2 + car3.width/2 && deformation>180){
    car3.shapeColor="red";
  }
  else{
    car3.shapeColor="white";
  }

  //Adding the same thing for car4. The code which I wrote for car3
  if(car4.x-wall.x === wall.width/2 + car4.width/2 && deformation<80){
    car4.shapeColor="green";
  }
  else if(car4.x-wall.x === wall.width/2 + car4.width/2 && deformation<180 && deformation>80){
    car4.shapeColor="yellow";
  }
  else if(car4.x-wall.x === wall.width/2 + car4.width/2 && deformation>180){
    car4.shapeColor="red";
  }
  else{
    car4.shapeColor="white";
  }

  drawSprites();
}