const turnInfo = document.getElementById("turn-info");

let isXTurn = true;

const selectSquare = (id) => {
    const btn = document.getElementById(id);
    
    if (isXTurn) {
        btn.innerHTML = "X";
        switchTurn()
    }
    else {
        btn.innerHTML = "O";
        switchTurn()
    }
}

const reset = () => {
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        // checks each button to make sure it isnt the reset button
        if (buttons[i] != document.getElementsByClassName("reset-btn")[0]) {
            buttons[i].innerHTML = "‎ ";
        }
    }

    if (!isXTurn) {
        switchTurn();
    }
}

const switchTurn = () => {
    if (isXTurn) {
        turnInfo.innerHTML = "Player's Turn: O"
        isXTurn = false;
    }
    else {
        turnInfo.innerHTML = "Player's Turn: X"
        isXTurn = true;
    }
}