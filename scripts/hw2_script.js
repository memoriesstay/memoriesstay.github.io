

function process()
{
    var val1, val2, val3, input1, input2, input3, product, total, minNum, maxNum, avgNum, errMsg;

    resetResult(); //Reset results

      $("#total").fadeTo("slow", 1);
      $("#product").fadeTo("slow", 1);
      $("#average").fadeTo("slow", 1);
      $("#minResult").fadeTo("slow", 1);
      $("#maxResult").fadeTo("slow", 1);

    // Read in the 3 numbers
    input1 = document.forms["entryform"].elements["input1"].value;
    input2 = document.forms["entryform"].elements["input2"].value;
    input3 = document.forms["entryform"].elements["input3"].value;
    if (input1 == null || input1 == "" || input2 == null || input2 == "" || input3 == null || input3 == "") {
      errMsg = "Run Error: One or more values not enter.  Please make sure all fields are enter.";
      document.getElementById("msg").innerHTML = errMsg;
    }
    else {  
      val1 = Number(input1);
      val2 = Number(input2);
      val3 = Number(input3);
      //Calculation
      total = val1 + val2 + val3;
      // alert("input values: " + val1 + ", " + val2 + ", " + val3);
      product = val1 * val2 * val3;
      avgNum = total/3;
      minNum = Math.min(val1, val2, val3);
      maxNum = Math.max(val1, val2, val3);
      //Display Result
      document.getElementById("total").innerHTML = total.toFixed(2);
      document.getElementById("product").innerHTML = product.toFixed(2);
      document.getElementById("average").innerHTML = avgNum.toFixed(2);
      document.getElementById("minResult").innerHTML = minNum.toFixed(2);
      document.getElementById("maxResult").innerHTML = maxNum.toFixed(2);
  }
}

function resetResult()
{
  document.getElementById("msg").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("product").innerHTML = "";
  document.getElementById("average").innerHTML = "";
  document.getElementById("minResult").innerHTML = "";
  document.getElementById("maxResult").innerHTML = "";
}

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#total").fadeTo("slow", 0.15);
    $("#product").fadeTo("slow", 0.15);
    $("#average").fadeTo("slow", 0.15);
    $("#minResult").fadeTo("slow", 0.15);
    $("#maxResult").fadeTo("slow", 0.15);
  });
});