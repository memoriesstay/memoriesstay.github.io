
// $(document).ready(function(){

// });


// calculateGrade() - reading students score, and calculate the final average score, and the corresponding Letter Grade
function calculateGrade()
{
  resetResult(); //Clear Results area
  var hwavg, midExam, finalExam, participation, finalAvg, finalLetterGrade, errMsg;

  if ($("#studentgrade").valid()) {
    // define variables	
    // var numb;
    // var firstname;
    // // get input number value from form using getElementById
    // numb = document.getElementById("num").value;
    // firstname = document.getElementById("fname").value;
    // document.forms["myform"].elements["comment"].value = ("Thanks, " + firstname + ", the number " + numb + "  is a number between 0 and 10");

      //Calculating Final Average Score and round it to whole number
      finalAvg = Math.round((0.5 * hwavg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation));

      // Determine the Letter Grade base on the final average sore.
      if(finalAvg<60) { // 0 to 59 F
        finalLetterGrade = "F";
        errMsg = "Student must <strong style=\"color: red;\">retake</strong> the course";
      } else if (finalAvg<70) {
        finalLetterGrade = "D";
        errMsg = "Student must <strong style=\"color: red;\">retake</strong> the course";
      } else if (finalAvg<80) {
        finalLetterGrade = "C";
      } else if (finalAvg<90) {
        finalLetterGrade = "B";
      } else {
        finalLetterGrade = "A";
      }
      //Display Result Final Average Score, and the Letter Grade
      document.getElementById("fscore").value = finalAvg;
      document.getElementById("fgrade").value = finalLetterGrade;
      document.getElementById("fscore").value = finalAvg;
      document.getElementById("fgrade").value = finalLetterGrade;

  }

  //   var hwavg, midExam, finalExam, participation, finalAvg, finalLetterGrade, errMsg, minScore=0, maxScore=100;

  //   resetResult(); //Clear Results area

  //   // Read in the 4 numbers: Homework Avg, MidTerm Exam, Final Exam, and Participation
  //   hwavg = parseInt(document.forms["studentgrade"].elements["hwavg"].value);
  //   midExam = parseInt(document.forms["studentgrade"].elements["mexam"].value);
  //   finalExam = parseInt(document.forms["studentgrade"].elements["fexam"].value);
  //   participation = parseInt(document.forms["studentgrade"].elements["participation"].value);
    
  //   if(isNaN(hwavg) || isNaN(midExam) || isNaN(finalExam) || isNaN(participation)) {
  //     // Handling user missing input fields
  //     errMsg = "Run Error: One or more fields not enter.  Please make sure all fields are entered.";
  //   } else if(!between(hwavg, minScore, maxScore) || !between(midExam, minScore, maxScore) || !between(finalExam, minScore, maxScore) || !between(participation, minScore, maxScore)) {
  //     // Handling input out of range
  //     errMsg = "One or more values are <b>not between 0 and 100.<b>  Please enter score between 0 and 100.";
  //     // document.getElementById("msg").innerHTML = errMsg;
  //   }
  //   else {  

  //     //Calculating Final Average Score and round it to whole number
  //     finalAvg = Math.round((0.5 * hwavg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation));

  //     // Determine the Letter Grade base on the final average sore.
  //     if(finalAvg<60) { // 0 to 59 F
  //       finalLetterGrade = "F";
  //       errMsg = "Student must <strong style=\"color: red;\">retake</strong> the course";
  //     } else if (finalAvg<70) {
  //       finalLetterGrade = "D";
  //       errMsg = "Student must <strong style=\"color: red;\">retake</strong> the course";
  //     } else if (finalAvg<80) {
  //       finalLetterGrade = "C";
  //     } else if (finalAvg<90) {
  //       finalLetterGrade = "B";
  //     } else {
  //       finalLetterGrade = "A";
  //     }
  //     //Display Result Final Average Score, and the Letter Grade
  //     document.getElementById("fscore").value = finalAvg;
  //     document.getElementById("fgrade").value = finalLetterGrade;


  // }

  //Display Error or Retake Message if not empty 
  if (errMsg){
    document.getElementById("msg").innerHTML = errMsg;
  }
}

// Check if the value is within the range
// x is the value
// min is minimum value
// max is maximum value
function between(x, min, max) {
  return x >= min && x <= max;
}

//Clear out the previous run result.
function resetResult()
{
  document.getElementById("msg").innerHTML = "";
  document.getElementById("fgrade").value = "";
  document.getElementById("fscore").value = "";
}

