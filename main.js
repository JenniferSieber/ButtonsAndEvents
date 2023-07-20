const once = document.querySelector('#once');
const chargeNow = document.querySelector('#chargeNow');
const decline = document.querySelector('#handleDecline');
const divs = document.querySelectorAll('div');
const buttons = document.querySelectorAll('button');

function logText(e) {
  console.log(this.classList.value);
  const body = document.querySelector('body');
  randomizedBackgroundColor(body); 
}

function handleOnce(e) {
  e.stopPropagation();
  console.log('Once!');
  once.disabled = true; 
}

function handleClick() {
  console.log('Charge Now!');
  chargeNow.disabled = true;
}

function handleDecline() {
  console.log('Card declined! Try again.');
  chargeNow.disabled = false;
  decline.disabled = false;
}

function randomizedColor() {
  const minRed = 247;
  const maxRed = 255;
  const minGreen = 127;
  const maxGreen = 144;
  const minBlue = 80;
  const maxBlue = 247;
  const randomRed = Math.floor(Math.random() * (maxRed - minRed + 1)) + minRed;
  const randomGreen = Math.floor(Math.random() * (maxGreen - minGreen + 1)) + minGreen;
  const randomBlue = Math.floor(Math.random() * (maxBlue - minBlue + 1)) + minBlue;

  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  return randomColor;
}

function randomizedBackgroundColor(element) {
  const randomColor = randomizedColor();
  element.style.backgroundColor = randomColor;
}

function randomBtn() {
  const random = randomizedColor();
  return buttons.forEach(btn => btn.style.backgroundColor = random);
}

divs.forEach(div => div.addEventListener('click', logText));

buttons.forEach(btn => btn.addEventListener('click', randomBtn));

once.addEventListener('click', handleOnce, {
  once: true
});

chargeNow.addEventListener('click', handleClick);

decline.addEventListener('click', handleDecline);

