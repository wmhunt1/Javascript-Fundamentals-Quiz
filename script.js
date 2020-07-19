
//question array
var questionArray = ["Question 1", "Question 2", "Question 3", "Question 4"]
//answer array
var optionArray = ["A, B, C, or D", "A, B, C, or D", "A, B, C, or D", "A, B, C, or D",]
var answerArray = [1, 2, 1, 4]
var score = 0;
var answered = false;
var seconds_left = 60
var current_question = 0;

//timer function
function timer()
{
    document.getElementById("time").innerHTML = seconds_left
}
//quiz function
function jsQuiz()
{
    
    timer()
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "block"
    document.getElementById("score_section").style.display = "none"  
    quiz_question()
    //final_score()
}
//question function
function quiz_question()
{ 
    document.getElementById("question").innerHTML = questionArray[current_question];
    document.getElementById("option").innerHTML = optionArray[current_question];
}
//check answer function
//sees if value from check answer button = value in answerArray
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
    console.log(score)
    //moves to next question
    current_question ++;
}
//wrong answer function
function wrong_answer()
{
    console.log("wrong")
    console.log(score)
    current_question ++;
    seconds_left --;
}
//final score function
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = score;
}