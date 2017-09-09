export {Scene};

function Scene(document, parent, {width, height, backgroundColor = "000000"}) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  parent.appendChild(canvas);

  var context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;

  var options = arguments[2];
  Object.assign(this, options, {
    render: render
  });

  function render() {
    context.fillStyle = this.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
