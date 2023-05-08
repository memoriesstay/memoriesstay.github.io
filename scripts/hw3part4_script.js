//Global variable
var xvalue, yvalue; //Use for Multiplication

//generateNumbers() will generate 2 numbers between 0 to 9, and assigned it to x, and y
function generateNumbers() {
  resetMath();
  xvalue = Math.floor(Math.random() * 10);
  yvalue = Math.floor(Math.random() * 10);
  // console.log("xvalue: " + xvalue + ". yvalue: " + yvalue);
  document.getElementById("xvalue").innerHTML = xvalue;
  document.getElementById("yvalue").innerHTML = yvalue;

}

// Validate user answer, and ask if user would like to play again.
function checkMathAnswer() {
  // resetTemperature(); // To ensure previous run result is clear out.
  // Read in temperature
  var userResponse, result, usrMsg, playAgain;
  playAgain = '<p>Would you like to play another round?&nbsp;<button type="button" class="btn btn-success" onclick="generateNumbers()">Yes</button>&nbsp;<button type="button" class="btn btn-primary" onclick="encourageMathMsg()">No</button></p>';
  userResponse = parseInt(document.forms["mathquest"].elements["usranswer"].value);
  //Formula: C = 5/9 * (F - 32) , where F is the input value.
  if(isNaN(userResponse)) {
    usrMsg = "Please enter your answer.";
    document.getElementById("msgwrong").innerHTML = usrMsg;
  } else {
    result = xvalue * yvalue;
    if(result == userResponse) {
      usrMsg = "GOOD WORK! The answer is indeed " + result + "! " + playAgain;
      document.getElementById("msgwrong").innerHTML = "";
      document.getElementById("msgright").innerHTML = usrMsg;
    } else {
      usrMsg = "Nice Try!  The correct answer is: " + result + ". " + playAgain;
      document.getElementById("msgwrong").innerHTML = usrMsg;
      document.getElementById("msgright").innerHTML = "";
    }


  }
}

function encourageMathMsg() {
  resetMath();
  document.getElementById("msgright").innerHTML = "Thanks for playing, see you next time!";
}

function resetMath() {
  document.getElementById("msgwrong").innerHTML = "";
  document.getElementById("msgright").innerHTML = "";
  document.forms["mathquest"].elements["usranswer"].value = "";
  document.getElementById("usranswer").focus();
}

// JQuery to support the mouse over menu dropdown.
$(document).ready(function(){
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });
});  