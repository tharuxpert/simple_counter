// var btn1 = document.getElementsById('btn1');
// var btn2 = document.getElementsById('btn2');
var data = 0;
var boxLeft = 330;

document.querySelector('#num').innerText = data;

document.querySelector('#box').style.left = boxLeft;

document.querySelector('#btn1').addEventListener('click', increment);

document.querySelector('#btn2').addEventListener('click', decrement);

document.querySelector('#random').addEventListener('click', random);

function increment() {
    data = data + 1;
    document.querySelector('#num').innerText = data;

    boxLeft = boxLeft + 10;
    console.log(boxLeft);
    document.querySelector('#box').style.left = `${boxLeft}px`;
}

function decrement() {
    data = data - 1;
    document.querySelector('#num').innerText = data;

    boxLeft = boxLeft - 10;
    console.log(boxLeft);
    document.querySelector('#box').style.left = `${boxLeft}px`;
}

function random() {
    document.querySelector('body').style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}