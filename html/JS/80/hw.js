(function () {
  'use strict';

  const theCanvas = document.querySelector('#theCanvas');
  const context = theCanvas.getContext('2d');

  function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();

  const RADIUS = 50;
  let x = RADIUS + 1;
  let y = RADIUS + 1;
  let dx = 1;
  let dy = 2.5;

  setInterval(() => {
    context.clearRect(0,0, theCanvas.width, theCanvas.height);

    context.beginPath();
    context.fillStyle = colorPicker;

    x += dx;
    y += dy;


    if (x < RADIUS + 1 || x >= theCanvas.width - (RADIUS+1)) {
      dx = -dx;
    }

    if (y < RADIUS + 1 || y >= theCanvas.height - (RADIUS + 1)) {
      dy = -dy;
    }

    context.arc(x, y, RADIUS, 0, 2 * Math.PI);
    context.fill();
  }, 1);

  const colorPicker = document.getElementById('color-picker');
  //const ballColor = document.getElementById('context');

  colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;

    // ballColor.style.backgroundColor = selectedColor;
});

colorPicker.addEventListener('change', (event) => {
   console.log("Color selection finalized:", event.target.value);
});



}());