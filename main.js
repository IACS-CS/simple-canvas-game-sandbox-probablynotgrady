import "./style.css";

import { GameInterface, } from "simple-canvas-library";

let gi = new GameInterface();

let squareX = 0;
let squareY = 0;
gi.addDrawing(function ({ ctx, width, height, elapsed, stepTime }) {
  ctx.fillRect(squareX, squareY, 20, 20);
  ctx.fillStyle = "white";
  

});
//have square move in different directions and at different speeds when clicked
gi.addClickHandler(function ({ x, y }) {
  squareX = x - 10;
  squareY = y - 10;
});

gi.run();
