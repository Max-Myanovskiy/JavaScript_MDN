const para = document.querySelector("p");
para.insertAdjacentElement.
var ballCount = 0;

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
  constructor(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
    super(x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = randomRGB();
        }
      }
    }
  }
}

class EvilCircle extends Shape {
  constructor(x, y, exists) {
    super(x, y, 20, 20, exists);

    this.color = "white";
    this.size = 10;
  }
  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }
  update() {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    }

    if (this.x - this.size <= 0) {
      this.x += this.size;
    }

    if (this.y + this.size >= height) {
      this.y -= this.size;
    }

    if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }
  setControls() {
    var _this = this;
    window.onkeydown = function (e) {
      if (e.keyCode === 65) {
        _this.x -= _this.velX;
      } else if (e.keyCode === 68) {
        _this.x += _this.velX;
      } else if (e.keyCode === 87) {
        _this.y -= _this.velY;
      } else if (e.keyCode === 83) {
        _this.y += _this.velY;
      }
    };
  }
  collisionDetect() {
    for (var j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[j].size) {
          balls[j].exists = this.exists = false;
          ballCount--;
          para.textContent = "Ball count: " + ballCount;
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  var ball = new Ball(
    random(0, width),
    random(0, height),
    random(-7, 7),
    random(-7, 7),
    true,
    randomRGB(),
    random(10, 20)
  );
  balls.push(ball);
  ballCount++;
  para.textContent = "Ball count: " + ballCount;
}

const evilBall = new EvilCircle(random(0, width), random(0, height), true);
evilBall.setControls();

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    if (balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
