function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("white");
  drawShape();
  fill("red");
  noStroke();
  circle(300, 200, 200);
}

function drawShape() {
  fill("yellow");
  quad(75, 200, 300, 50, 525, 200, 300, 350);
}
