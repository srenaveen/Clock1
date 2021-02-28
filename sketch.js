var mn,hr,sc;
function setup() {
  createCanvas(600,600);
  sc = second();
  mn = minute();
  hr = hour();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();
  mnAngle = map(sc,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();
  hrAngle = map(hr,0,60,0,360);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  translate(0,0);
  pop();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}