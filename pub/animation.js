"use strict";
const log = console.log;

let myIndex = [0, 0, 0, 0, 0, 0];
const CYCLE_TIME = 5000;
carousel();

function carousel() {
  animate("queue", 0);
  animate("spotify", 1);
  animate("alarm", 2);
  animate("fitmotiv", 3);
  animate("style", 4);
  animate("grid-lib", 5);

  setTimeout(carousel, CYCLE_TIME);
}

function animate(className, index) {
  let i;
  const x = document.getElementsByClassName(className);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex[index]++;
  if (myIndex[index] > x.length) {
    myIndex[index] = 1;
  }
  x[myIndex[index] - 1].style.display = "block";
}
