var car,wall
var speed,weight,deformation

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(400, 200, 50, 50);
  car.velocityX = speed
  car.shapeColor = "blue"

  wall = createSprite(800,200,60,height/2)

}

function draw() {
  background(255,255,255);  

  if (wall.x - car.x < wall.width/2 + car.width/2) {
  car.velocityX = 0
  deformation = 0.5*weight/2*speed*speed/22500

  if (deformation > 180) {
    car.shapeColor = color(255,0,0);
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0)
  }
  if (deformation < 100) {
    car.shapeColor = color(0,255,0)
  }
}

  drawSprites();
}