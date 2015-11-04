$(function() {
    var money = 100;
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    
    function between(x, min, max) {
        return x >= min && x <= max;
    }
    function win() {
        money += (bet * 2);
    }

    function lose() {
        money -= bet
    }

    function updateStanding() {
        $('#money').text(money);
    }

    $("#bet").on('keypress', function(event) {
        if (event.keyCode == 13) {
            bet = parseInt($("#bet").val(), 10);
            if (between(bet, 5, 10)) {
                $('#bet').hide();
                $('h1').text('Guess a number:');
                $("#guess").show();
            } 
            else {
                alert('Please bet within $5-$10, sir');
            };
        };
    })

    $("#guess").on('keypress', function(event) {
        if (event.keyCode == 13) {
            guess = parseInt($("#guess").val(), 10);
            if (between(guess, 1, 10)) {
                switch(guess) {
                case randomNumber:
                    win();
                    alert("Good guess, sir");
                    break;
                case randomNumber - 1:
                    alert ("Nice try, sir");
                    break;
                case randomNumber + 1:
                    alert ("Nice try, sir");
                    break;
                default:
                    lose();
                    alert("Terrible guess, sir \n Please hand over your money");
                    break;
                };
            }
            else {
                alert("Please pick a number between 1-10, sir");
            };
        };
    })
})

