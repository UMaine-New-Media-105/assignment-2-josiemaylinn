function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addShape(50,50,1)
  
}

function addShape (x,y,size) {
  push()
  translate()
  scale(size)
  stroke(1);
  strokeWeight(5);
  beginShape();
  vertex(50, 100);
  vertex(200, 25);
  vertex(200, 200);
  vertex(350, 200);
  vertex(200, 375);
  vertex(50, 200);
  vertex(50, 100);
  endShape();
  pop()
}
