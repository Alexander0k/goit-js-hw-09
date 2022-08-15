const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")


startBtn.addEventListener('click', onStartBtn)
stopBtn.addEventListener('click', onStoptBtn)

let timerId = null;

function onStartBtn() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;

}

function onStoptBtn() {
    clearTimeout(timerId);    
    startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}