const iframe = document.querySelector('iframe');

// timer
const timer = window?.location?.search?.split('=')[1];
console.log({ timer });
const isTimerProblem = timer === undefined || timer < 2000;
const SECONDS = isTimerProblem ? 7000 : timer;

iframe.src = LINK_1;
let current = false;
console.log({ SECONDS });

//////////////// main
setInterval(() => {
  updateScriptSrcRandomly();
  swapFrames();
}, SECONDS);

/////////////////////////////////////
/////////////////////////// FUNCTIONS

function swapFrames() {
  iframe.src = current ? LINK_1 : LINK_2;
  current = !current;
}

function updateScriptSrcRandomly() {
  const rand = Math.floor(Math.random() * 999999999999999);
  document.querySelector('#main').src = `./script.js?${rand}`;
}
