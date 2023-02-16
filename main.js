function setup() {
  createCanvas(400, 400);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rowOne()
  rowTwo()
  rowThree()
  rowFour()
  rowFive()
}

function rowOne() {
  y1 = 0
  fill('red')
  square(0, y1, 80);
  square(320, y1, 80);
  fill('white')
  square(80, y1, 80);
  square(160, y1, 80);
  square(240, y1, 80);
  
}

function rowTwo() {
  y2 = 80
  fill('red')
  square(0, y2, 80);
  square(80, y2, 80);
  square(240, y2, 80);
  square(320, y2, 80);
  fill('white')
  square(160, y2, 80);

  
}

function rowThree() {
  y3 = 160
  fill('gold')
  square(0, y3, 80);
  square(320, y3, 80);
  fill('white')
  square(160, y3, 80);
  fill('red')
  square(80, y3, 80);
  square(240, y3, 80);

}

function rowFour() {
  y4 = 240
  fill('red')
  square(0, y4, 80);
  square(80, y4, 80);
  square(240, y4, 80);
  square(320, y4, 80);
  fill('white')
  square(160, y4, 80);

  
}

function rowFive() {
  y5 = 320
  fill('red')
   square(0, 320, 80);
  square(240, 320, 80);
  square(320, 320, 80);
  fill('white')
    square(80, 320, 80);
  square(160, 320, 80);
  
}
