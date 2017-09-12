import {mapRenderer} from "./map.js";
import {fpsRenderer} from "./fps.js";

var canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
window.document.body.appendChild(canvas);

var context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;

let renderers = [];
renderers.push(mapRenderer(canvas));
renderers.push(fpsRenderer(canvas));

main();

function main(ts) {
  renderers.forEach(function(render) {
    render(ts);
  });
  requestAnimationFrame(main);
};
