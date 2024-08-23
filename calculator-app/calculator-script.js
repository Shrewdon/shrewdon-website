// calculator code

const display = document.getElementById("display");

let isErrored = false;

function addToDisplay(input) {
    if (!isErrored) {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    isErrored = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
        isErrored = true;
    }
}

function doAFunny() {
    display.value = "hehehehehehehehehehehe"
}