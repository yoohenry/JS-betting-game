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
})

