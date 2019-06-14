let birdX, birdY, birdR
let birdYV = 0
let gravity = -0.5
let jumpStrength = 10

let pipeWidth = 100
let pipeHeight = []
let pipeSpeed = 5
let pipeX = []
let pipeY = []
let pipesSpace = 250


function setup() {
  createCanvas(1000,1000)
  birdX = 250
  birdY = height/2
  birdR = 16
}



//keyBoard functions
function keyPressed() {
  if (keyCode == 32) {
    jump()
  }
}



// bird functions
function jump(){
  birdYV = -jumpStrength

}

function updateBird(){
  birdY += birdYV
  birdYV -= gravity
  if (birdY > width -birdR) {
    birdY = width - birdR
    birdYV = 0
  }
  else if (birdY < birdR) {
    birdY = birdR
  }
}



// pipe functions
function updatePipe(){
  for(let i = 0; i < pipeX.length; i++){
    pipeX[i] -=pipeSpeed
    rect(pipeX[i], 0, pipeWidth, pipeHeight[i])
    rect(pipeX[i], pipeHeight[i] + pipesSpace, pipeWidth, height - pipeHeight[i] - pipesSpace)
    print(pipeHeight[i])
  }
}

function createPipe(){
  pipeX.push(width)
  pipeHeight.push(random(350, 650))

}





function draw() {
  background(0)
  circle(birdX, birdY, birdR)
  updateBird()
  updatePipe()
  if (frameCount % 100 == 0) {
    createPipe()
  }
}
