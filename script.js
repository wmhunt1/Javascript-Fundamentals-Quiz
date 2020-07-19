//question array
var questionArray = ["1", "2"]
var answerArray = ["1", "2"]
var question = Math.floor((Math.random() * questionArray.length))
var score = 0;
var answered = 0;
var time = 60

function jsQuiz()
{
    while (answered < questionArray.length && time != 0)
    {
        for (var i = 0; i < questionArray.length; i++)
        {
            alert (questionArray[i])
            var answer = prompt("what is the answer?")
            if (answer === answerArray[i])
            {
                alert ("correct")
                score += 1;
                answered += 1;
            }
            else
            {
                alert ("wrong")
                answered += 1;
            }
        }
    }
    final_score()
}
function final_score()
{
    alert(score)
}