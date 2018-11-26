var x, y, xvelocity, yvelocity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width;
  y = height;
  xvelocity = 10;
  yvelocity = 10;
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse (x, y, 100, 100); 
 	
  x += xvelocity;
  y += yvelocity;
  	
  if (x > windowWidth || x < 0)  {
     xvelocity = -xvelocity;
  }
  	
  if (y > windowHeight || y < 0) {
    yvelocity = -yvelocity;
  }
}

function keyPressed () {
  if (key === "r") {
    background(255);
  }
}