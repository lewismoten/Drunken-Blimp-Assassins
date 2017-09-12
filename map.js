export {mapRenderer};

function mapRenderer(canvas) {

  let context = canvas.getContext("2d");
  return render;

  function render(timestamp) {
    renderBackground();
    renderTiles();
  }

  function renderBackground() {
    context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function renderTiles() {
    let tileSize = 12;
    for (let y = 0; y < 20; y++) {
      for (let x = 0; x < 20; x++) {
        context.fillStyle = y % 2 === x % 2 ? "#000000" : "#ffffff";
        context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}
