// Declatartion of game variables.
var userNumber = 0;
var computerNumber = 0;
var win = 0;
var loss = 0;

//Declaration of cristal variables.
var rubyNumber = 0;
var emeraldNumber = 0;
var amathystNumber = 0;
var citrusNumber = 0;

//Function used to choose random numbers for the cristals and computer.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function to check result.
function score() {
    if (userNumber > computerNumber) {
        alert("You Lose");
        loss++;
        $("#loss").text(loss);
        initialize();
    } else if (userNumber === computerNumber) {
        alert("You Win");
        win++;
        $("#win").text(win);
        initialize();
    } else {
        $("#added-number").text(userNumber);
    }
}

function initialize() {
    //Set initia value of 0 for user and random number for computer
    computerNumber = randomNumber(18, 120);
    userNumber = 0;

    //Set random values between 1 and 12 for the cristals
    rubyNumber = randomNumber(1, 12);
    emeraldNumber = randomNumber(1, 12);
    amathystNumber = randomNumber(1, 12);
    citrusNumber = randomNumber(1, 12);
    //console.log(rubyNumber);
    //console.log(emeraldNumber);
    //console.log(amathystNumber);
    //console.log(citrusNumber);

    //Check for repeated numbers
    while (
        rubyNumber === emeraldNumber ||
        rubyNumber === amathystNumber ||
        rubyNumber === citrusNumber ||
        emeraldNumber === amathystNumber ||
        emeraldNumber === citrusNumber ||
        amathystNumber === citrusNumber
    ) {
        rubyNumber = randomNumber(1, 12);
        emeraldNumber = randomNumber(1, 12);
        amathystNumber = randomNumber(1, 12);
        citrusNumber = randomNumber(1, 12);
        //console.log(rubyNumber);
        //console.log(emeraldNumber);
        //console.log(amathystNumber);
        //console.log(citrusNumber);
    }

    /*
      //Array for checking
      var noRepeat = [rubyNumber, emeraldNumber, amathystNumber, citrusNumber];

      //compare array
      for (var i = 0; i < noRepeat.length - 1; i++) {
          for (var j = 3; j != i && j > 0; j--) {
              if (noRepeat[i] === noRepeat[j]) {

                  console.log('before change')
                  console.log(rubyNumber);
                  console.log(emeraldNumber);
                  console.log(amathystNumber);
                  console.log(citrusNumber);

                  if (i === 0) {
                      rubyNumber = randomNumber(1, 12);
                  }
                  if (i === 1) {
                      emeraldNumber = randomNumber(1, 12);
                  }
                  if (i === 2) {
                      amathystNumber = randomNumber(1, 12);
                  }
                  if (i === 3) {
                      citrusNumber = randomNumber(1, 12);
                  }
                  console.log('after change')
                  console.log(rubyNumber);
                  console.log(emeraldNumber);
                  console.log(amathystNumber);
                  console.log(citrusNumber);

              }
          }
      }
      */

    $("#random-number").text(computerNumber);
    $("#added-number").text(userNumber);
}
initialize();

//When user clicks ruby
$("#rubyid").on("click", function () {
    //add value to user number
    userNumber += rubyNumber;
    //check number and update score
    score();
});

//When user clicks emerald
$("#emeraldid").on("click", function () {
    //add value to user number
    userNumber += emeraldNumber;
    //check number and update score
    score();
});

//When user clicks amathyst
$("#amathystid").on("click", function () {
    //add value to user number
    userNumber += amathystNumber;
    //check number and update score
    score();
});

//When user clicks ruby
$("#citrusid").on("click", function () {
    //add value to user number
    userNumber += citrusNumber;
    //check number and update score
    score();
});