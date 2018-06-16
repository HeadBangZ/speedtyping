const originalText = document.querySelector('.original-text p').innerHTML;
const writtenText = document.querySelector('#written-text');
const theTimer = document.querySelector('.timer');
const resetBtn = document.querySelector('#reset-btn');
const charsPerMinute = document.querySelector('.cpm');

// Leading Zero


// The timer function
function startTimer() {
    let textEnteredLength = writtenText.value.length;
    if (textEnteredLength === 0) {
        console.log(textEnteredLength);
    }
}

// Spellcheck
function spellCheck() {
    let textEnteredValue = writtenText.value;
    console.log(textEnteredValue);
}

// Result Calculation


// Reset Game


// Event Listerners
writtenText.addEventListener('keypress', startTimer, false);
writtenText.addEventListener('keyup', spellCheck, false);