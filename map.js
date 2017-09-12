export {mapRenderer};

function mapRenderer(canvas) {

  let context = canvas.getContext("2d");
  let lastTimestamp = performance.now();
  return render;

  function render(timestamp) {
    renderBackground();
  }

  function renderBackground() {
    context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
