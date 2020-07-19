//question array
var questionArray = ["1", "2"]
var answerArray = ["1", "2"]
var score = 0;
var answered = 0;
var seconds_left = 60
//var time = document.querySelector(".time");
//var question = document.querySelector(".question");

// function setTime() {
//     var timerInterval = setInterval(function() {
//       seconds_left--;
//       time.textContent = seconds_left + " seconds left.";
  
//       if(seconds_left === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
//   }
document.getElementById("question") = score;
function jsQuiz()
{
    // setTime()
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "block"
    document.getElementById("score_section").style.display = "none"  
    while (answered < questionArray.length && seconds_left > 0)
    {
        for (var i = 0; i < questionArray.length; i++)
        {
            question = questionArray[i];
            var answer = prompt("what is the answer?")
            if (answer === answerArray[i])
            {
                alert ("correct")
                score ++;
                answered ++;
            }
            else
            {
                alert ("wrong")
                answered ++;
                seconds_left --;
            }
        }
    }
    final_score()
}
function final_score()
{
    document.getElementById("start_section").style.display = "block"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    alert(score)
}