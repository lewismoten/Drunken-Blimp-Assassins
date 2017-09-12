export {fpsRenderer};

function fpsRenderer(canvas) {

  let context = canvas.getContext("2d");
  let lastTimestamp = performance.now();
  return render;

  function render(timestamp) {

    var fps = getFps(timestamp);
    drawText("FPS: " + fps);
  }

  function drawText(text) {
    context.font = "bold 14pt Arial";

    // Position
    context.textAlign = "right";
    context.textBaseline = "top";
    let x = canvas.width - 10;
    let y = 10;

    // Outline
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.strokeText(text, x, y);

    // Filled Text
    context.lineWidth = 1;
    context.fillStyle = render.color || "yellow";
    context.fillText(text, x, y);

  }

  function getFps(timestamp) {
    var ms = timestamp - lastTimestamp;
    var fps = Math.round(1000 / ms);
    lastTimestamp = timestamp;
    return fps;
  }
}
