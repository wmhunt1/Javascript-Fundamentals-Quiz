//question array
var questionArray = ["Question 1", "Question 2", "Question 3"]
var answerArray = ["1", "2", "3"]
var score = 0;
var answered = false;
var seconds_left = 60
var answer = document.getElementById("answer").value;

function jsQuiz()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "block"
    document.getElementById("score_section").style.display = "none"  
    quiz_question()
    //final_score()
}
function quiz_question()
{ 
    for (var i = 0; i < questionArray.length; i++)
    {
        document.getElementById("question").innerHTML = questionArray[i];
    }
//check answer function
function check_answer()
{
    if (answer === answerArray[i])
    {
        correct_answer()
    }
    else
    {
        wrong_answer()
    }
}
//correct answer function
function correct_answer()
{
    console.log("correct")
    score ++;
}
//wrong answer function
function wrong_answer()
{
    console.log("wrong")
}
//final score function
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = score;
}