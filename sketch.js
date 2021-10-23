var paddle;
function setup() {
  createCanvas(400,400);
paddle = createSprite(200, 200, 10, 10);
paddle.shapeColor = "orange"
}

function draw() 
{
  background(30);
if (keyDown("up")){
paddle.y -= 5

}
if (keyIsDown(DOWN_ARROW)){
paddle.y += 5

}

if (keyDown("right")){
paddle.x += 5
}
if (keyDown("left")){
  paddle.x -= 5
}
drawSprites();
}




