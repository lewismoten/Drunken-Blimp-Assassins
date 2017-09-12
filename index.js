import {mapRenderer} from "./map.js";
import {fpsRenderer} from "./fps.js";
import {input} from "./input.js";


var canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
window.document.body.appendChild(canvas);

var context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;

let renderers = [];
renderers.push(mapRenderer(canvas));

let fps = fpsRenderer(canvas);
renderers.push(fps);



main();

function main(ts) {

  // make something interactive...
  if (input.history.join(",") === "up,up,down,down,left,right,left,right,b,a") {
    fps.color = "red";
  } else {
    fps.color = "yellow";
  }

  renderers.forEach(function(render) {
    render(ts);
  });
  requestAnimationFrame(main);
};
