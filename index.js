import {mapRenderer} from "./map.js";
import {fpsRenderer} from "./fps.js";
import {input} from "./input.js";
import {Player} from "./player.js";

var canvas = document.createElement("canvas");
canvas.width = 640;
canvas.height = 480;
window.document.body.appendChild(canvas);

var context = canvas.getContext("2d");
context.imageSmoothingEnabled = false;

let player = new Player(canvas);

let renderers = [];
renderers.push(mapRenderer(canvas));
renderers.push(player.render);

let fps = fpsRenderer(canvas);
renderers.push(fps);



requestAnimationFrame(main);

function main(ts) {

  // make something interactive...
  if (input.history.join(",") === "up,up,down,down,left,right,left,right,b,a") {
    fps.color = fps.color === "red" ? "yellow" : "red";
    input.history.length = 0;
  }

  if (input.left || input.right) {
    input.left ? player.turnLeft() : player.turnRight();
  } else {
    player.turnNone();
  }

  renderers.forEach(function(render) {
    render(ts);
  });
  requestAnimationFrame(main);
};
