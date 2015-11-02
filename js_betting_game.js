
var startMoney = 100;
 
function newBetting() {
 
    var bet = prompt("How much you wanna bet, sir?");
    if (bet < 5 || bet > 10)
        alert ("Please bet within $5-$10, sir");
}
 
newBetting();
