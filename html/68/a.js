(function () {
  'use strict';

  let clicks = 1;
  function handleButtonClick(){
const myNewButton = document.createElement('button');
myNewButton.innerText = ++clicks;
document.body.appendChild(myNewButton);

myNewButton.addEventListener('click', handleButtonClick);
  }

  const theButton = document.querySelector('#theButton').addEventListener('click', handleButtonClick);

}());