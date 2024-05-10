// 1. Deposit money
// 2. Determine number of lines to bet
// 3. Collect bet amount
// 4. Spin slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
}

const depositAmount = deposit();
console.log(depositAmount);