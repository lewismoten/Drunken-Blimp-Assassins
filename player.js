export {Player};

function Player(canvas) {

  let headingDegrees = 0;
  let x = 50;
  let y = 50;
  let width = 20;
  let height = 40;
  let lastTimestamp = 0;
  let rotateSpeed = 0; // player rotation direction
  let rotateMultiplier = 0.05; // how slow the ship turns

  let context = canvas.getContext("2d");

  let that = this;
  this.render = render;
  this.turnLeft = turnLeft;
  this.turnRight = turnRight;
  this.turnNone = turnNone;

  function turnLeft() {
    rotateSpeed = -1 * rotateMultiplier;
  }
  function turnRight() {
    rotateSpeed = 1 * rotateMultiplier;
  }
  function turnNone() {
    rotateSpeed = 0;
  }

  function render(timestamp) {
    updateHeading(timestamp);

    context.save();
    context.translate(x, y);
    context.rotate(headingDegrees * Math.PI / 180);
    context.fillStyle = "blue";
    context.fillRect(width / -2, height / -2, width, height);

    context.restore();

    lastTimestamp = timestamp;

  }

  function updateHeading(timestamp) {
    if (rotateSpeed !== 0) {
      var ms = timestamp - lastTimestamp;
      headingDegrees += (ms * rotateSpeed);
      if (headingDegrees > 180) {
        headingDegrees -= 360;
      } else if(headingDegrees < -180) {
        headingDegrees += 360;
      }
    }
  }
}
