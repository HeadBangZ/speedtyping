const originalText = document.querySelector('.original-text p').innerHTML;
const writtenText = document.querySelector('#written-text');
const theTimer = document.querySelector('.timer');
const resetBtn = document.querySelector('#reset-btn');
const charsPerMinute = document.querySelector('.cpm');



// Leading Zero


// The timer function
function runTimer() {

}

// Start function to call the timer function
function start() {
    let textEnteredLength = writtenText.value.length;
    if (textEnteredLength === 0) {
        setInterval(runTimer, 10);
    }
}

// Spellcheck
function spellCheck() {
    let textEnteredValue = writtenText.value;
    console.log(textEnteredValue);
}

// Result Calculation


// Reset Game
function reset() {
    writtenText.value = "";
    writtenText.style.borderColor = "#666";
}

// Event Listerners
writtenText.addEventListener('keypress', start, false);
writtenText.addEventListener('keyup', spellCheck, false);
resetBtn.addEventListener('click', reset, false);