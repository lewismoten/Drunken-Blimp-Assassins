let keyMap = [
  8, "backspace",
  9, "tab",
  13, "enter",
  16, "shift",
  17, "control",
  18, "alt",
  19, "pause",
  20, "capsLock",
  27, "escape",
  33, "pageUp",
  34, "pageDown",
  35, "end",
  36, "home",
  37, "left",
  38, "up",
  39, "right",
  40, "down",
  45, "insert",
  46, "delete",
  91, "leftWindowKey",
  92, "rightWindowKey",
  93, "selectKey",
  106, "multiply",
  107, "add",
  109, "subtract",
  110, "decimalPoint",
  111, "divide",
  144, "numberLock",
  145, "scrollLock",
  186, "semiColon",
  187, "equalSign",
  188, "comma",
  189, "dash",
  190, "period",
  191, "forwardSlash",
  192, "graveAccent",
  219, "openBracket",
  220, "backSlash",
  221, "closeBracket",
  222, "singleQuote"
];
for(let i = 65; i <= 90; i++) {
  keyMap.push(i, String.fromCharCode(i).toLowerCase());
}
for(let i = 96; i <= 105; i++) {
  keyMap.push(i, "numberPad" + (i - 96));
}
for(let i = 48; i <= 57; i++) {
  keyMap.push(i, "number" + (i - 48));
}
for(let i = 112; i <= 123; i++) {
  keyMap.push(i, "functionKey" + (i - 111));
}
function getKeyName(code) {
  var i = keyMap.indexOf(code);
  return i === -1 ? "" + code : keyMap[i + 1];
}

function getKeyCode(name) {
  var i = keyMap.indexOf(name);
  return i === -1 ? Number(name) : keyMap[i - 1];
}

export {keyMap, getKeyName, getKeyCode};
