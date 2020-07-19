//question array
var questionArray = 
[
    "Question 1: Variables are the ____ of programming?", 
    "Question 2: What are variables made up of?",
    "Question 3: How to you comfort a Javascript bug?", 
    "Question 4: What is the first value in an array?",
    "Question 5: How do you figure out how many elements are in an array?",
    "Question 6: What animal is used for debugging?",
    "Question 7: Which returns a number from 1 to 10?",
    "Question 8: Which calls the defined function: function myFunction(){}",
    "Question 9: Why do we use functions?",
    "Question 10: What seperates an object's properties and values?",
    "Question 11: How do you call an objects property?",
    "Question 12: What goes around a string?",
    "Question 13: Does else have a conditional?",
    "Question 14: What goes between an if and an else?",
    "Question 15: Which symbol means and?",
    "Question 16: Which operator means increment?",
    "Question 17: Which isn't a pop-up box?",
    "Question 18: Which variable is most commonly used in a for loop?",
    "Question 19: Which is used to check the content of a string in an if statement?",
    "Question 20: What should you never forget to use?",
]
//answer array
var optionArray = 
[   
    "A: Nouns, B: Verbs, C: Adjectives , or D :Adverbs", 
    "A: names and constants:, B: titles and values, C: names and values, or D: cats and dogs",
    "A: Squish it , B: Kill it, C: sing to it, or D: Console it.", 
    "A: 1, B: A, C: 0, or D: Alpha",
    "A: .length , B: .width, C: . height, D: .radius",
    "A: Megatron, Rubber Duck, A Tickle Me Elmo, Rubber Chicken",
    "A: Math.Random , B: Math.floor(Math.random() * 10); , C: Math.floor(Math.random() * 10 +1); , or D: Math.floor(Math.random() * 11);",
    "A: myFunction, B: function(), C: MyFunction(), or D: myFunction() ",
    "A: They're cool, B: To prevent repetitive code, C: We like math, or D: None of the above",
    "A: ., B: =, C: :, or D: ;",
    "A: object.property, B: object, C: property, or D: object-property",
    "A: Nothing, B: Parenthesis , C: A Period  , or D: Quotation Marks",
    "A: No, B: Yes, C: Maybe, or D: Of course",
    "A: if else, B: else, C: else if, or D: if",
    "A: and, B: &, C: &&&, or D: &&",
    "A: +, B: -+, C: ++ , or D: +=",
    "A: alert, B: prompt , C: confirm, or D: yes/no",
    "A: x, B: i, C: y, or D: h",
    "A:= , B:== , C:=== , or D: ====",
    "A: ;, B: :, C: ,, or D: .",
]
var answerArray = [1, 3, 4, 3, 1, 2, 3, 4, 2, 3, 1, 4, 1, 3, 4, 3, 4, 2, 3, 1];
var score = 0;
var seconds_left = 60
var current_question = 0;
//se
var r_snd = new Audio("Assets/ding.mp3")
var w_snd = new Audio("Assets/wrong.mp3")
//hs arrays
var highScores = [""];
var nameScores = [""];
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
    //resets SE
    r_snd.currentTime = 0;
    //plays SE
    r_snd.play();
    score ++;
    //moves to next question
    current_question ++;
}
//wrong answer function
function wrong_answer()
{
    //resets SE
    w_snd.currentTime = 0;
    //plays SE
    w_snd.play();
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
    printHS()
}
function printHS()
{
    highScores = localStorage.getItem('high-score');
    nameScores = localStorage.getItem('name-score');
    if (highScores != null && highScores.length > 0)
    {
        for (var i = 0; i < highScores.length; i++)
        {
         
            var tag = document.createElement("p")
            var text = document.createTextNode("Initials: " + nameScores[i] + " score: " + highScores[i])
            tag.appendChild(text);
            var element = document.getElementById("high_scores");
            element.appendChild(tag);
        }
    }
    else
    {

    }
}
function submitHS()
{
    //can't get the push to array to work
    var name = document.getElementById("initials").value;
    console.log(score)
    console.log(name)
    highScores.fill(score)
    nameScores.fill(name)
    localStorage.setItem('high-score', highScores);
    localStorage.setItem('name-score', nameScores);
}
function clear_stor()
{
    localStorage.clear();
}
