const originalText = document.querySelector('.original-text p').innerHTML;
const writtenText = document.querySelector('#written-text');
const theTimer = document.querySelector('.timer');
const resetBtn = document.querySelector('#reset-btn');
const charsPerMinute = document.querySelector('.cpm');
const wordsPerMinute = document.querySelector('.wpm');

let timer = [0, 0, 0, 0];
let interval;
let timerRuns = false;

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
    if (textEnteredLength === 0 && !timerRuns) {
        interval = setInterval(runTimer, 10);
        timerRuns = true;
    }
}

// Spellcheck
function spellCheck() {
    let textEnteredValue = writtenText.value;
    if (textEnteredValue === originalText) {
        writtenText.style.borderColor = "#00a86b";
        clearInterval(interval);
        resultCalculation();
    } else {
        if (originalText.substring(0, textEnteredValue.length) === textEnteredValue) {
            writtenText.style.borderColor = "#189ad3";

        } else {
            writtenText.style.borderColor = "#c30101";
        }
    }

}

// Result Calculation
function resultCalculation() {
    let resultCharactersPerMinute = Math.round(60 / ((timer[0] * 60) + timer[1] + (timer[2] / 100)) * originalText.length);
    let resultWordsPerMinute = Math.round(60 / ((timer[0] * 60) + timer[1] + (timer[2] / 100)) * originalText.split(" ").length);
    charsPerMinute.innerHTML = "Characters per minute : " + resultCharactersPerMinute;
    wordsPerMinute.innerHTML = "Words per minute : " + resultWordsPerMinute;
    interval = true;
}

// Reset Game
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRuns = false;
    writtenText.value = "";
    writtenText.style.borderColor = "#666";
    theTimer.innerHTML = "00:00:00";
    charsPerMinute.innerHTML = "";
    wordsPerMinute.innerHTML = "";
}

// Event Listerners
writtenText.addEventListener('keypress', start, false);
writtenText.addEventListener('keyup', spellCheck, false);
resetBtn.addEventListener('click', reset, false);