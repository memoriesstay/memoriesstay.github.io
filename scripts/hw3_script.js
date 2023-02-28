//Global variable
var xvalue, yvalue; //Use for Multiplication

// calculateGrade() - reading students score, and calculate the final average score, and the corresponding Letter Grade
function calculateGrade()
{
    var hwavg, midExam, finalExam, participation, finalAvg, finalLetterGrade, errMsg, minScore=0, maxScore=100;

    resetResult(); //Clear Results area

    // Read in the 4 numbers: Homework Avg, MidTerm Exam, Final Exam, and Participation
    hwavg = parseInt(document.forms["studentgrade"].elements["hwavg"].value);
    midExam = parseInt(document.forms["studentgrade"].elements["mexam"].value);
    finalExam = parseInt(document.forms["studentgrade"].elements["fexam"].value);
    participation = parseInt(document.forms["studentgrade"].elements["participation"].value);
    
    if(isNaN(hwavg) || isNaN(midExam) || isNaN(finalExam) || isNaN(participation)) {
      // Handling user missing input fields
      errMsg = "Run Error: One or more fields not enter.  Please make sure all fields are entered.";
    } else if(!between(hwavg, minScore, maxScore) || !between(midExam, minScore, maxScore) || !between(finalExam, minScore, maxScore) || !between(participation, minScore, maxScore)) {
      // Handling input out of range
      errMsg = "One or more values are <b>not between 0 and 100.<b>  Please enter score between 0 and 100.";
      // document.getElementById("msg").innerHTML = errMsg;
    }
    else {  

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


  }

  //Display Error or Retake Message if not empty 
  if (errMsg){
    document.getElementById("msggrade").innerHTML = errMsg;
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
  document.getElementById("msggrade").innerHTML = "";
  document.getElementById("fgrade").value = "";
  document.getElementById("fscore").value = "";
}

function saleCommission()
{
  resetSaleComResult(); // To ensure previous run result is clear out.

  // Read in the 4 numbers: item1, item2, item3, item4
  var qty1, qty2, qty3, qty4, errMsg, price1, price2, price3, price4, salerep;
  qty1 = parseInt(document.forms["sale"].elements["item1"].value);
  qty2 = parseInt(document.forms["sale"].elements["item2"].value);
  qty3 = parseInt(document.forms["sale"].elements["item3"].value);
  qty4 = parseInt(document.forms["sale"].elements["item4"].value);

  // Read in the prices
  price1 = parseFloat((document.getElementById("price1").innerHTML).substring(1)); //Strip out the $
  price2 = parseFloat((document.getElementById("price2").innerHTML).substring(1));
  price3 = parseFloat((document.getElementById("price3").innerHTML).substring(1));
  price4 = parseFloat((document.getElementById("price4").innerHTML).substring(1));
  salerep = document.forms["sale"].elements["sname"].value;
  if((salerep === "") || salerep == null){
    errMsg = "Seller's Name is required.";
  } else if(isNaN(qty1) || isNaN(qty2) || isNaN(qty3) || isNaN(qty4)) {
    errMsg = "Run Error: One or more fields not enter.  Please make sure all fields are entered.";
  } else if (qty1 < 0 || qty2 < 0 || qty3 < 0  || qty4 < 0) {
    errMsg = "Run Error: One or more values are negative.  Please amount 0 or greater.";
  } else {
    //Calculate Commission
    var basePay = 250, commissionRate=0.09, totalSold, totalEarn, total1, total2, total3, total4;
    total1 = qty1*price1;
    total2 = qty2*price2;
    total3 = qty3*price3;
    total4 = qty4*price4;
    totalSold = total1 + total2 + total3 + total4;
    totalEarn = totalSold * commissionRate + basePay;
    //Displaying Results
    document.getElementById("qty1").innerHTML = qty1;
    document.getElementById("qty2").innerHTML = qty2;
    document.getElementById("qty3").innerHTML = qty3;
    document.getElementById("qty4").innerHTML = qty4;

    document.getElementById("total1").innerHTML = total1.toFixed(2);
    document.getElementById("total2").innerHTML = total2.toFixed(2);
    document.getElementById("total3").innerHTML = total3.toFixed(2);
    document.getElementById("total4").innerHTML = total4.toFixed(2);

    document.getElementById("totalsold").value = formatNumber(totalSold.toFixed(2));
    document.getElementById("totalearn").value = formatNumber(totalEarn.toFixed(2));
  }

    //Display Error or Retake Message if not empty 
    if (errMsg){
      document.getElementById("msgsale").innerHTML = errMsg;
    }
}

function formatNumber(x) {
  console.log("X=" + x + ". change format? " + x.toLocaleString("en-US"));
  return x.toLocaleString("en-US");
}

// Clear the previous Sale Commission Calculation
function resetSaleComResult() 
{
  document.getElementById("totalsold").value = "";
  document.getElementById("totalearn").value = "";
  document.getElementById("msgsale").innerHTML = "";

  for(i = 1; i <= 4; i++) {
    document.getElementById("qty" + i).innerHTML = "";
    document.getElementById("total" + i).innerHTML = "";
  }
}

function calculateFarenhait() {
  // resetSaleComResult(); // To ensure previous run result is clear out.

  // Read in temperature
  var tempValue, result, errMsg;
  tempValue = parseInt(document.forms["temperature"].elements["tempval"].value);
  //Formula: F = (9/5 * C) + 32, where C is the input value.
  if(isNaN(tempValue)) {
    errMsg = "Please enter a value for temperature.";
    document.getElementById("msgtemp").innerHTML = errMsg;
  } else {
    result = Math.round((9/5 * tempValue) + 32);
    document.getElementById("textresult").value = tempValue + "\u00B0 Celsious is "  + result + "\u00B0 Fahrenheit";
  }

}

function calculateCelcius() {
  resetTemperature(); // To ensure previous run result is clear out.
  // Read in temperature
  var tempValue, result, errMsg;
  tempValue = parseInt(document.forms["temperature"].elements["tempval"].value);
  //Formula: C = 5/9 * (F - 32) , where F is the input value.
  if(isNaN(tempValue)) {
    errMsg = "Please enter a value for temperature.";
    document.getElementById("msgtemp").innerHTML = errMsg;
  } else {
    result = Math.round(5/9 * (tempValue - 32));
    document.getElementById("textresult").value = tempValue + "\u00B0 Fahrenheit is "  + result + "\u00B0 Celsious.";
  }
}

function resetTemperature() {
  document.getElementById("textresult").value ="";
  document.getElementById("tempval").focus();
}

//generateNumbers() will generate 2 numbers between 0 to 9, and assigned it to x, and y
function generateNumbers() {
  resetMath();
  xvalue = Math.floor(Math.random() * 10);
  yvalue = Math.floor(Math.random() * 10);
  // console.log("xvalue: " + xvalue + ". yvalue: " + yvalue);
  document.getElementById("xvalue").innerHTML = xvalue;
  document.getElementById("yvalue").innerHTML = yvalue;

}

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

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#total").fadeTo("slow", 0.15);
    $("#product").fadeTo("slow", 0.15);
    $("#average").fadeTo("slow", 0.15);
    $("#minResult").fadeTo("slow", 0.15);
    $("#maxResult").fadeTo("slow", 0.15);
  });
  //Display the mouseover tooltip displaying on the Seller's Name Field
  $("sname").tooltip();

  $("#sale").validate({
    rules: {
      name: { 
        required: true
       }
      }

    });

  // $("#studentgrade").validate({
  //   // Rules for each input item
  //   rules: {
  //     score: {
  //       required: true,
  //       number: true,
  //       min: 0,
  //       max: 10
  //     }
  //   }
  // });

  $( "#studentgrade" ).validate( {
    rules: {
      hwavg: {
        required: true,
        number: true,
        min: 0,
        max: 100
      },
      mexam: {
        required: true,
        number: true,
        min: 0,
        max: 100
      }
    },
    messages: {
      hwavg: "Please enter Homework Average Score between 0 and 100",
      mexam: "Please enter Midterm Exam Score between 0 and 100",
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
      // Add the `help-block` class to the error element
      error.addClass( "help-block" );

      if ( element.prop( "type" ) === "checkbox" ) {
        error.insertAfter( element.parent( "label" ) );
      } else {
        error.insertAfter( element );
      }
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
    }
  } );

  $( "#temperature" ).validate( {
    rules: {
      tempval: {
        required: true,
        number: true
      }
    },
    messages: {
      tempval: "Please a temperature value."
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
      // Add the `help-block` class to the error element
      error.addClass( "help-block" );

      if ( element.prop( "type" ) === "checkbox" ) {
        error.insertAfter( element.parent( "label" ) );
      } else {
        error.insertAfter( element );
      }
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).addClass( "has-error" ).removeClass( "has-success" );
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).addClass( "has-success" ).removeClass( "has-error" );
    }
  } );
 
});