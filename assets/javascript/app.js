/* Pseudo code of the trivia game.
First we need to create a game grid in which we can have multiple choice questions

We need to create an object in which we will store all the questions

We need to create a random function to select from an object that displays the questions
*/
// Declatartion of game variables.
var userNumber = 0;
var computerNumber = 0;
var win = 0;
var loss = 0;

//Array for question options
var triviaQuestions = [

    {
        "question": "What is the capital of Bangladesh?",
        "choice": ["Dhaka", "Chittagong", "Sylhet"],
        "correct": ["Dhaka"]
    },
    {
        "question": "What does 2+2 equal to?",
        "choice": ["3", "2", "4"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["4"]
    },
    {
        "question": "What is the real name of Damon Salvatore?",
        "choice": ["Paul Wesley", "Steven McQueen", "Ian Somerhalder"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Ian Somerhalder"]
    },
    {
        "question": "What is the name of the largest planet in the universe?",
        "choice": ["Earth", "Jupiter", "Uranus"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Jupiter"]
    },
    {
        "question": "What is the capital of New York?",
        "choice": ["Manhattan", "NYC", "Albany"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Albany"]
    },
    {
        "question": "How many bones does the human body have?",
        "choice": ["109", "206", "114"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["206"]
    },
    {
        "question": "What is the alter ego of Batman?",
        "choice": ["Bruce Banner", "Bruce Wayne", "Tony Stark"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Bruce Wayne"]
    },
    {
        "question": "How many books are there in the Harry Potter series?",
        "choice": ["7", "5", "8"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["7"]
    },
    {
        "question": "What is Naruto's surname?",
        "choice": ["Sarutobi", "Uchiha", "Uzumaki"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Uzumaki"]
    },
    {
        "question": "What is the name of Sherlock Holmes' partner?",
        "choice": ["Peterson", "Watson", "Hanson"], //quizObj[2].choice[0],quizObj[2].choice[1]
        "correct": ["Watson"]
    },

];

var track = [];

var maxQues = prompt("How many questions do you want to answer?", "5");
var rand = Math.floor(Math.random() * maxQues);

var str = '<h4>Answer all the questions</h4>';

for (var i = 0; i < maxQues; i++) {

    var rand = Math.floor(Math.random() * maxQues);
    str += (i + 1) + '.  ' + quizObj[rand].question + '<br>';
    str += '<form><table>' +
        '<tr><td id="a1"><input type="radio" name="radio' + i + '"/>' + '&nbsp;&nbsp;' + quizObj[rand].choice[0] + '</td></tr>' +
        '<tr><td id="a2"><input type="radio" name="radio' + i + '" />' + '&nbsp;&nbsp;' + quizObj[rand].choice[1] + '</td></tr>' +
        '<tr><td id="a3"><input type="radio" name="radio' + i + '"/>' + '&nbsp;&nbsp;' + quizObj[rand].choice[2] + '</td></tr>' +
        '</table></form><br>';
    track[i] = rand;
}
str += '<input value="Submit" type="button" onclick="scoreMe()"><br><br>';
str += 'Score: <input id="score" type="text" size="8" ><br><br><br>';
document.getElementById('quesRes').innerHTML = str;

function scoreMe() {
    var sum = 0;
    for (var j = 0; j < maxQues; j++) {
        for (var k = 0; k < 3; k++) {
            if (quizObj[track[j]].choice[k].checked === quizObj[track[j]].correct[0]) {
                console.log('Works' + j);
                sum++;
            }
        }
    }
    document.getElementById('score').value = ((sum / maxQues) * 100) + '%';
}