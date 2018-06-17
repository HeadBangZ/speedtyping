const originalText = document.querySelector('.original-text p').innerHTML;
const writtenText = document.querySelector('#written-text');
const theTimer = document.querySelector('.timer');
const resetBtn = document.querySelector('#reset-btn');
const charsPerMinute = document.querySelector('.cpm');

const timer = [0, 0, 0, 0];

// Leading Zero
function leadingZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

// The timer function
function runTimer() {
    theTimer.innerHTML = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
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
    if (textEnteredValue === originalText) {
        writtenText.style.borderColor = "#00a86b";
    } else {
        if (originalText.substring(0, textEnteredValue.length) === textEnteredValue) {
            writtenText.style.borderColor = "#189ad3";

        } else {
            writtenText.style.borderColor = "#c30101";
        }
    }

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