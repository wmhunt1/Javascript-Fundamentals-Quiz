//document.getElementById("question").innerHTML = "";
//question array
var questionArray = ["Question 1", "Question 2"]
var answerArray = [1, 2]
var score = 0;
var answered = false;
var seconds_left = 60
var current_question = 0;

//quiz function
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
    document.getElementById("question").innerHTML = questionArray[current_question];
}
//check answer function
function check_answer(x)
{
    if (x === answerArray[current_question])
    {
        correct_answer()
    }
    else
    {
        wrong_answer()
    }
    quiz_question()
}
//correct answer function
function correct_answer()
{
    console.log("correct")
    score ++;
    current_question ++;
}
//wrong answer function
function wrong_answer()
{
    console.log("wrong")
    current_question ++;
}
//final score function
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = score;
}