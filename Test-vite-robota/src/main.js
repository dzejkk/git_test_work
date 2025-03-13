import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupCounterMinus } from './counterMinus.js'




document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="counter-minus" type="button"></button>
      <button id="reset" type="button">Reset</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`



// get setters from components

const plusCounter = setupCounter(document.querySelector('#counter'));
const minusCounter = setupCounterMinus(document.querySelector('#counter-minus'));


// setup reset

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',()=> {
  plusCounter(0);
  minusCounter(0);
})