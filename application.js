// starts off with $100
// prompts user for the amount they want to bet
// alerts if it's outsdie $5-10
// guess 1-10 for a correct number
// doubles money if corrent guess
// if the guess is off by one user keeps the money
// else they lose their bet
// game ends when the user loses all money
 
$(function () {
    var money = 100;
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        var bet = prompt("How much you wanna bet, sir?");
        if (bet < 5 || bet > 10)
            alert ("Please bet within $5-$10, sir");

        var guess = prompt("Please choose a number between 1-10, sir");
        if (guess > 0 && guess < 11)
            if (guess === randomNumber) {
                money += (bet * 2);
                alert ("Good guess, sir");
            }
            else if (guess === randomNumber - 1 || guess === randomNumber + 1) {
                alert ("Nice try, sir");
            }

            else {
                money -= bet;
                alert ("Terrible guess, sir \n Please hand over your money");
            }
        else {
            alert ("Please pick a number between 1-10, sir");
        }
    } while (money > 4);
    alert ("You are broke, get out")
}