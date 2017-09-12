let history = [];
let keyCodes = {};

var input = {
  history: history,
  keyCodes: keyCodes
};

import {getKeyName} from "./key-map.js";

export {input};

addEventListener("keydown", onKeyDown, false);
addEventListener("keyup", onKeyUp, false);

function onKeyDown({keyCode}) {
  keyCodes[keyCode] = true;
  var name = getKeyName(keyCode);
  if(!input[name]) {
    remember(name);
    input[name] = true;
  }
}

function onKeyUp({keyCode}) {
  var name = getKeyName(keyCode);
  delete keyCodes[keyCode];
  delete input[name];
}

function remember(name) {
  history.push(name);
  while (history.length > 10) {
    history.shift();
  }
}
