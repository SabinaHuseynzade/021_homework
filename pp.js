const paddleHeight = 80;
const paddleSpeed = 10;

let paddleTop = 100;
let paddle2Top = 100;

let paddleMoveUp = false;
let paddleMoveDown = false;
let paddle2MoveDown = false;
let paddle2MoveUp = false;

let ballXSpeed = 5;
let ballYSpeed = 5;

let ballTop = 200;
let ballLeft = 400;

function movePaddle() {
  document.addEventListener('keydown', (e) => {
    if (e.key == 's') {
      paddleMoveDown = true;
    } else if (e.key == 'w') {
      paddleMoveUp = true;
    }

    if (e.key == 'ArrowUp') {
      paddle2MoveUp = true;
    } else if (e.key == "ArrowDown") {
      paddle2MoveDown = true;
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key == 's') {
      paddleMoveDown = false;
    } else if (e.key == 'w') {
      paddleMoveUp = false;
    }

    if (e.key == 'ArrowUp') {
      paddle2MoveUp = false;
    } else if (e.key == "ArrowDown") {
      paddle2MoveDown = false;
    }
  });

  if (paddleMoveDown && paddleTop < 320) {
    paddleTop += paddleSpeed;
  } else if (paddleMoveUp && paddleTop > 0) {
    paddleTop -= paddleSpeed;
  }

  if (paddle2MoveDown && paddle2Top < 320) {
    paddle2Top += paddleSpeed;
  } else if (paddle2MoveUp && paddle2Top > 0) {
    paddle2Top -= paddleSpeed;
  }
}

function moveBall() {
    if (ballTop > 384) {
      ballYSpeed = -ballYSpeed;
    } else if (ballTop < 0) {
      ballYSpeed = -ballYSpeed;
    }
  
    if (ballLeft > 784) {
      if (ballTop >= paddle2Top && ballTop <= paddle2Top + paddleHeight) {
        ballXSpeed = -ballXSpeed;
      } else {
        ballLeft = 400;
        ballTop = 200;
      }
    } else if (ballLeft < 10) {
      if (ballTop >= paddleTop && ballTop <= paddleTop + paddleHeight) {
        ballXSpeed = -ballXSpeed;
      } else {
        ballLeft = 400;
        ballTop = 200;
      }
    }
  
    ballLeft += ballXSpeed;
    ballTop += ballYSpeed;
  }
  
function update() {
  movePaddle();
  moveBall();

  document.getElementById('pong1').style.top = paddleTop + "px";
  document.getElementById('pong2').style.top = paddle2Top + "px";

  document.getElementById('ball').style.top = ballTop + "px";
  document.getElementById('ball').style.left = ballLeft + "px";
}

function startGame() {
  setInterval(update, 1000 / 60);
}

startGame();