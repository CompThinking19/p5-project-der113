//I love Christmas and holiday music...so why not do a digital scene with music. Put the final touch on the tree, the star and touch screen for color dots.
//assign variables
let img, lights, ball, cane, box, boxes, gifts, star;
let song;
var x;
var y;
//position star to top left corner to move by mouse
var starX = 0;
var starY = 0;
var colors;

//preload images/music and assign variables to load faster
function preload()
{
  // preload images
  img = loadImage("tree.png");
  lights = loadImage("lights.png");
  ball = loadImage("ball-ornaments.png")
  cane = loadImage("candy-cane.png")
  box = loadImage("gift-box.png")
  boxes = loadImage("giftboxes.png")
  gifts = loadImage("gifts.png")
  star = loadImage("star.gif")
  soundFormats('ogg', 'mp3');
  song = loadSound("wewishyouamerrychristmas.mp3");
}

//drag star to tree
function mouseDragged() {
  if ((mouseX > starX - 50) && (mouseX < starX + 50)) {
    if ((mouseY > starY - 50) && (mouseY < starY + 50)) {
      starX = mouseX;
      starY = mouseY;
    }
  }
}

function setup() {
  createCanvas(400, 400);//size
  //play song on repeat
  song.loop();
  //reset button to start over
  resetSketch();
  var button = createButton("Reset");
  button.mousePressed(resetSketch);
  // An array of five colors, one for each finger (touch feature)
  colors = [color(255,0,0), color(0,255,0), color(0,0,255),color(255, 255,0), color(0,255,255)];
}

//function to reset scene
function resetSketch(){
  preload(starX = 0, starY = 0);
}

function draw() {
  background(250);//white so you can see different color dot with touch

// The touches array holds an object for each finger touch
// The array length is tied to the number of fingers currently touching and a color for each finger
  for (var i = 0; i < touches.length; i++) {
    noStroke();
    // One color per finger
    fill(colors[i]);
    // Draw a circle at each finger
    ellipse(touches[i].x, touches[i].y, 24, 24);
  }

// load tree
  image(img, 50, 50, 300,300);//shrink size of tree and leave room for star at top and presents at bottom

//decorate tree
  image(cane, 158, 180, 25, 25);
  image(cane, 200, 80, 25, 25);
  image(cane, 192, 125, 25, 25);
  image(cane, 180, 270, 25, 25);
  image(ball,160, 120, 25, 25);
  image(ball, 200, 180, 25, 25)
  image(ball, 250, 260, 25, 25);
  image(ball, 120, 270, 25, 25);
  image(star, starX, starY, 50, 50);
  image(lights, 170, 100, 50, 20);
  image(lights, 150, 150, 100, 25);
  image(lights, 120, 210, 150, 50);
  image(lights, 95, 290, 220, 50);
  image(gifts, 150, 325, 75, 75);
  image(box, 30, 320, 75, 75);
  image(boxes, 280, 300, 120, 100);

  fill(0,200,0)//green text
  var msg = 'Have a Merry Christmas';
  text(msg, 90, 20);//center over tree
  textSize(20)

//make glitter
  fill(240)
  noStroke();
// for loop
  for (var j = 0; j < 30; j++) {
//make tree/gifts "glitter"
  fill(255, 255, 255, random(755));
  ellipse(random(400), random(400), random(3));
  }

//prevents touch dragging screen around
function touchMoved() {
  return false;
}
}
