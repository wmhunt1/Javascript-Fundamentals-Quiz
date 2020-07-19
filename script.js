//question array
var questionArray = ["Question 1", "Question 2", "Question 3"]
var answerArray = ["1", "2", "3"]
var score = 0;
var answered = 0;
var seconds_left = 60
var question = 0
function jsQuiz()
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
            answered ++;
        }
        else
        {
            console.log("wrong")
            answered ++;
            seconds_left --;
        }
    }
    final_score()
}
function submit()
{

}
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = score;
}