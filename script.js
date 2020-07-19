//var time = document.getElementById("time");
//question array
var questionArray = ["Question 1", "Question 2", "Question 3", "Question 4"]
//answer array
var optionArray = ["A, B, C, or D", "A, B, C, or D", "A, B, C, or D", "A, B, C, or D",]
var answerArray = [1, 2, 1, 4]
var score = 0;
var answered = false;
var seconds_left = 60
var current_question = 0;
var r_snd = new Audio("Assets/ding.mp3")
var w_snd = new Audio("Assets/wrong.mp3")
//timer function
//took timer from Ins_Timer_Intervals
function setTime() 
{
    var timerInterval = setInterval(function()
    {
      seconds_left--;
      document.getElementById("time").innerHTML = seconds_left + " seconds left..";
  
      if(seconds_left === 0)
       {
        clearInterval(timerInterval);
        final_score()
       }
  
    }, 1000);
}

//quiz function
function jsQuiz()
{
    
    setTime()
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "block"
    document.getElementById("score_section").style.display = "none"  
    quiz_question()
}
//question function
function quiz_question()
{ 
    if(current_question == questionArray.length)
    {
        final_score()
    }
    else
    {
        document.getElementById("question").innerHTML = questionArray[current_question];
        document.getElementById("option").innerHTML = optionArray[current_question];
    }
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
    r_snd.play();
    console.log("correct")
    score ++;
    //moves to next question
    current_question ++;
}
//wrong answer function
function wrong_answer()
{
    w_snd.play();
    console.log("wrong")
    //moves to next question
    current_question ++;
    //loses a second on a wrong answer
    seconds_left --;
    document.getElementById("time").innerHTML = seconds_left + " seconds left..";
}
//final score function
function final_score()
{
    document.getElementById("start_section").style.display = "none"
    document.getElementById("quiz_section").style.display = "none"
    document.getElementById("score_section").style.display = "block"
    document.getElementById("final_score").innerHTML = "Your score is " + score + " Points.";
}
