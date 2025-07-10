// DOM elementlerini seç
const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');

let intervalId = null;
let currentTime = 10;

function updateDisplay() {
    timerDisplay.textContent = currentTime;
}


startBtn.addEventListener('click', function() {
   const inputValue = parseInt(timeInput.value);
    if (inputValue && inputValue > 0) {
        currentTime = inputValue;
        updateDisplay();
    }
  
    message.style.display = 'none';
    
   
    if (intervalId === null) {
        intervalId = setInterval(function() {
            currentTime--;
            updateDisplay();
            
            
            if (currentTime <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                message.style.display = 'block';
                timerDisplay.textContent = '0';
            }
        }, 1000);
    }
});


resetBtn.addEventListener('click', function() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    
    const inputValue = parseInt(timeInput.value) || 10;
    currentTime = inputValue;
    updateDisplay();
    message.style.display = 'none';
});


timeInput.addEventListener('input', function() {
    if (intervalId === null) { 
        const inputValue = parseInt(timeInput.value);
        if (inputValue && inputValue > 0) {
            currentTime = inputValue;
            updateDisplay();
        }
    }
});

updateDisplay();