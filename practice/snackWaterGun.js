let userChoice = prompt("choose 1 for snake, 2 for water, or 3 for gun");
let compChoice = Math.floor(Math.random() * 3) + 1;

let cChoose;

if (compChoice <= 1) {
    cChoose = 1;
} else if (compChoice <= 2) {
    cChoose = 2;
} else {
    cChoose = 3;
}

if (userChoice == 1) {
    alert("user choice is snake");
    if (cChoose == 1) {
        alert("computer choice is snake");
        alert("it's a tie");
    } else if (cChoose == 2) {
        alert("computer choice is water");
        alert("user wins");
    } else {
        alert("computer choice is gun");
        alert("computer wins");
    }
} else if (userChoice == 2) {
    alert("user choice is water");
    if (cChoose == 1) {
        alert("computer choice is snake");
        alert("computer wins");
    } else if (cChoose == 2) {
        alert("computer choice is water");
        alert("it's a tie");
    } else {
        alert("computer choice is gun");
        alert("user wins");
    }
} else if (userChoice == 3) {
    alert("user choice is gun");
    if (cChoose == 1) {
        alert("computer choice is snake");
        alert("user wins");
    } else if (cChoose == 2) {
        alert("computer choice is water");
        alert("computer wins");
    } else {
        alert("computer choice is gun");
        alert("it's a tie");
    }
} else {
    alert("Invalid choice! Please choose 1, 2, or 3.");
}
