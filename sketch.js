var runner_running, runner;
var pathImage;
var leftBoundary, rightBoundary;
var edges;

function preload(){
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,180,400,20);
  path.addImage("path",pathImage);
  path.velocityY = 4;

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410, 0, 100, 800)
  rightBoundary.visible = false;

  runner = createSprite (200, 350);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.05;

  
}

function draw() {
  background("purple");
  edges = createEdgeSprites();
  if (path.y > 400){
    path.y = height/2;
  }
  if (keyDown("RIGHT_ARROW")) {
    runner.x = runner.x + 5;
  }
  if (keyDown("LEFT_ARROW")) {
    runner.x = runner.x - 5;
  }

  createEdgeSprites();
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  drawSprites();

}


function createRunner() {
  var runner = createSprite(200,200)
}