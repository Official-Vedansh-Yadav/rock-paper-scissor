console.log("This is a simple rock,paper,scissor game created by vedansh yadav");

var randomNumber;
var result;
var userscore = 0;
var botscore = 0;

// functions
function getuserchoice(choice){
    randomNumber = Math.floor(Math.random() * 3);
    getcomputerchoice(choice);
    return choice;
}

function getcomputerchoice(userchoice) {
    var options = ['rock','paper','scissor'];
    var computerchoice = options[randomNumber];
    console.log(userchoice,computerchoice)
    getresult(userchoice,computerchoice);
}

function getresult(userchoice,computerchoice) {
    if (userchoice == 'rock') {
        if (computerchoice == 'rock') {
            result = 'DRAW';
        }else if (computerchoice == 'paper') {
            result = 'LOSS';
        }else if (computerchoice == 'scissor') {
            result = 'WON';
        }
    }else if (userchoice == 'paper') {
        if (computerchoice == 'rock') {
            result = 'WON';
        }else if (computerchoice == 'paper') {
            result = 'DRAW';
        }else if (computerchoice == 'scissor') {
            result = 'LOSS';
        }
    }else if (userchoice == 'scissor') {
        if (computerchoice == 'rock') {
            result = 'LOSS';
        }else if (computerchoice == 'paper') {
            result = 'WON';
        }else if (computerchoice == 'scissor') {
            result = 'DRAW';
        }
    }

    displayresult(result);
    storeresult(result);
}

function displayresult(result) {
    alert(`You ${result} the game`);
}

function storeresult(result){
    if (result == 'WON') {
        ++userscore;
    }else if(result == 'LOSS') {
        ++botscore;
    }
    console.log(userscore,botscore);

    document.getElementById('you').getElementsByTagName('p')[1].innerHTML = userscore;
    document.getElementById('bot').getElementsByTagName('p')[1].innerHTML = botscore;
}