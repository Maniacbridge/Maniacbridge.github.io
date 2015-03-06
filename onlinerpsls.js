var rpsls = function()
{ 
var wins = 0;
var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?").toLowerCase();
var computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

alert("The computer chose " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2) {
        alert("And... It's a tie!");
    }

//If the user chose rock...
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert("Rock crushes scissors. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else if (choice2 === "paper") {
        alert("Paper covers rock. You lose!");
    } else if (choice2 === "lizard") {
        alert("Rock crushes lizard. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else {
        alert("Spock vaporizes rock. You lose.");
    }
}

//If the user chose paper...
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors cuts paper. You lose!");
    } else if (choice2 === "rock") {
        alert("Paper covers rock. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else if (choice2 === "lizard") {
        alert("Lizard eats paper. You lose.");
    } else {
        alert("Paper disproves spock. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    }
}

//If the user chose scissors...
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors cuts paper. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else if (choice2 === "rock") {
        alert("Rock crushes scissors. You lose.");
    } else if (choice2 === "lizard") {
        alert("Scissors decapitates lizard. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else {
        alert("Spock smashes scissors. You lose.");
    }
}

//If the user chose lizard...
else if (choice1 === "lizard") {
    if (choice2 === "scissors") {
        alert("Scissors decapitate lizard. You lose.");
    } else if (choice2 === "rock") {
        alert("Rock crushes lizard. You lose.");
    } else if (choice2 === "paper") {
        alert("Lizard eats paper. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else {
        alert("Lizard poisons spock. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    }
}

//If the user chose spock...
else if (choice1 === "spock") {
    if (choice2 === "scissors") {
        alert("Spock smashes scissors. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else if (choice2 === "rock") {
        alert("Spock vaporizes rock. You win!");
        wins = wins + 1;
        console.log("You've won " + wins + " games.");
    } else if (choice2 === "lizard") {
        alert("Lizard poisons spock. You lose.");
    } else {
        alert("Paper disproves spock. You lose.");
    }
}

// If the user decides NOT to choose a real choice and decides to be funny
else if (choice1 === "upupdowndownleftrightleftrightbastart")
{
    alert ("no cheating allowed! choose again");
}

else if (choice1 === "guns")
{
    alert ("Maybe you shoud stop playing such violent games and play something lighter or listen to the sounds of nature. Relax, man. Choose again.");
}

else if (choice1 === "flamethrower")
{
    alert ("You burn the paper, scissors, the lizard, and Spock to a crisp, but the rock remains unharmed. The rock then becomes sentient and says that you should choose again.");
}

else if (choice1 === "justin bieber")
{
    alert ("Just NO. Choose again.");
}

else if (choice1 === "rick astley")
{
    alert ("never gonna give you up, never gonna let you down, only gonna tell you to CHOOSE AGAIN");
}

//tally addon

else if (choice1 === "tally")
{
    alert ("You've won " + wins + " games.");
}
// else
else
{
    alert("please choose an actual choice next time.");
}
};
compare(userChoice, computerChoice);
};


