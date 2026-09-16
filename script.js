function appendValue(val) {
  var screen = document.getElementById("screen");
  screen.value = screen.value + val;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function deleteChar() {
  var screen = document.getElementById("screen");
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  var screen = document.getElementById("screen");
  screen.value = eval(screen.value);
}

document.onkeydown = function (event) {
  var key = event.key;
  if (key >= "0" && key <= "9") {
    appendValue(key);
  }
};
