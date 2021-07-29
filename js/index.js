
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyEl: document.body,
    btnStartEl : document.querySelector('[data-action="start"]'),
    btnStopEl: document.querySelector('[data-action="stop"]')
}

refs.btnStartEl.addEventListener('click', onStartChangeColor);
refs.btnStopEl.addEventListener('click', onStopChangeColor);

const randomIntegerFromInterval = (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
};
    
let intervalId = null;

function onStartChangeColor(evt) {
    btnStartInactive()
    intervalId = setInterval(function () {
        let indexColors = randomIntegerFromInterval(0, colors.length);        
        refs.bodyEl.style.backgroundColor = colors[indexColors];     
    }, 1000)
}

function onStopChangeColor(evt) {         
    clearInterval(intervalId)
    btnStartActive()
}
function btnStartInactive() {
         refs.btnStartEl.setAttribute('disabled', true);
}
function btnStartActive() {
         refs.btnStartEl.removeAttribute('disabled');
}
    
