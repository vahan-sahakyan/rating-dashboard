const iframe = document.querySelector('iframe');

const LINK_1 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaASzI_auqFTp1CdHyOe23fyvSvYoU8GJFRYybTJV898C4DYFkif5-HD4MXLPpuFR3PRHx24d2jU8-/pubhtml?gid=0&single=true';
const LINK_2 =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4S0lgFSyweb_cXnVP-Y3mPHbizTaEfmHCRXf8EJkXXoSok77vofwdPIlh4Lxslvu5n_wN3uVm3-cc/pubhtml?gid=0&single=true';

const timer = window?.location?.search?.split('=')[1];
console.log({ timer });

iframe.src = LINK_1;
let current = false;

const isTimerProblem = timer === undefined || timer < 2000;

const SECONDS = isTimerProblem ? 7000 : timer;
console.log({ SECONDS });

setInterval(() => {
  iframe.src = current ? LINK_1 : LINK_2;
  current = !current;
}, SECONDS);
