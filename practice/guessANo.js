let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;

while (true) {
    let inputNum = prompt("Guess a number between 1 and 100");
    
    if (inputNum === null) {
        alert("Game cancelled");
        break;
    }

    inputNum = Number(inputNum);

    if (isNaN(inputNum) || inputNum < 1 || inputNum > 100) {
        alert("Please enter a valid number between 1 and 100");
        continue;
    }

    if (randomNumber === inputNum) {
        alert("Your guess is correct");
        alert("Your score is " + score);
        break;
    } else if (randomNumber < inputNum) {
        alert("Your guess is greater");
        score--;
    } else {
        alert("Your guess is lesser");
        score--;
    }
}
