var socket;
function setup() {
  createCanvas(640, 480);
  background(51);
  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing);
}
function newDrawing(data){
  noStroke;
  fill(255,0,40);
  ellipse(data.x, data.y, 26, 26);
}

function mouseDragged(){
  console.log(mouseX+ ' ,'+ mouseY);

  var data ={
    x: mouseX,
    y:mouseY
  }
  socket.emit('mouse', data);
  noStroke;
  fill(255);
  ellipse(mouseX, mouseY, 26, 26);

}


function draw() {
  
}