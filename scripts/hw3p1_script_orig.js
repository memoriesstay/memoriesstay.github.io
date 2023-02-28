
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

function saleCommission()
{
  resetSaleComResult(); // To ensure previous run result is clear out.

  // Read in the 4 numbers: item1, item2, item3, item4
  var qty1, qty2, qty3, qty4, errMsg, price1, price2, price3, price4;
  qty1 = parseInt(document.forms["sale"].elements["item1"].value);
  qty2 = parseInt(document.forms["sale"].elements["item2"].value);
  qty3 = parseInt(document.forms["sale"].elements["item3"].value);
  qty4 = parseInt(document.forms["sale"].elements["item4"].value);

  // Read in the prices
  price1 = parseFloat((document.getElementById("price1").innerHTML).substring(1)); //Strip out the $
  price2 = parseFloat((document.getElementById("price2").innerHTML).substring(1));
  price3 = parseFloat((document.getElementById("price3").innerHTML).substring(1));
  price4 = parseFloat((document.getElementById("price4").innerHTML).substring(1));
  if(isNaN(qty1) || isNaN(qty2) || isNaN(qty3) || isNaN(qty4)) {
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

  $("#studentgrade").validate({
    // Rules for each input item
    rules: {
      grade: {
        required: true,
        number: true,
        min: 0,
        max: 10
      }
    }
  });

  // $.validator.AddClassRules("saleitem", {cRequired:true, cMinLength: 2}
});