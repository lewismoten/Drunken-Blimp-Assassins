import {Scene} from "./scene.js";

var map = new Scene(document, document.body, {width: 640, height: 400});

var lastFrame = Date.now();
main();

function main() {
  var now = Date.now();
  var delta = now - lastFrame;
  lastFrame = now;
  map.render();
  requestAnimationFrame(main);
};
