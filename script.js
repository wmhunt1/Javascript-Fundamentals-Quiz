//question array
var questionArray = ["Question 1", "Question 2", "Question 3"]
var answerArray = ["1", "2", "3"]
var score = 0;
var answered = false;
var seconds_left = 60

function jsQuiz()
{
    quiz_question()
    final_score()
}
function quiz_question()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "block"
    document.getElementById("score_section").style.display = "none"  
    for (var i = 0; i < questionArray.length; i++)
    {
        document.getElementById("question").innerHTML = questionArray[i];
        var answer = document.getElementById("answer").value;
        if (answer === answerArray[i])
        {
            console.log("correct")
            score ++;
        }
        else
        {
            console.log("wrong")
            //seconds_left --;
        }
    }
}
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = score;
}