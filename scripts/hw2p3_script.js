// Read in user input for U.S. Dollar, then convert it to foreign currencies
function process()
{
  var eurRate, cadRate, hkdRate, jpyRate, mxnRate, usValue, errMsg;

  resetResult(); //Reset results

  // Read in the 3 numbers
  input1 = document.forms["entryform"].elements["usamt"].value;

  if (input1 == null || input1 == "") {
    errMsg = "Run Error: One or more values not enter.  Please make sure all fields are enter.";
    document.getElementById("msg").innerHTML = errMsg;
  }
  else {  
    usValue = Number(input1);
    eurRate = document.getElementById("eurrate").innerHTML;
    cadRate = document.getElementById("cadrate").innerHTML;
    hkdRate = document.getElementById("hkdrate").innerHTML;
    jpyRate = document.getElementById("jpyrate").innerHTML;
    mxnRate = document.getElementById("mxnrate").innerHTML;

    //Display Result
    document.getElementById("eurval").innerHTML = (eurRate * usValue).toFixed(2);
    document.getElementById("cadval").innerHTML = (cadRate * usValue).toFixed(2);
    document.getElementById("hkdval").innerHTML = (hkdRate * usValue).toFixed(2);
    document.getElementById("jpyval").innerHTML = (jpyRate * usValue).toFixed(2);
    document.getElementById("mxnval").innerHTML = (mxnRate * usValue).toFixed(2);
  }
}

// resetResult will clear out the result in the Result Panel.
function resetResult()
{
  document.getElementById("msg").innerHTML = "";
  document.getElementById("eurval").innerHTML = "";
  document.getElementById("cadval").innerHTML = "";
  document.getElementById("hkdval").innerHTML = "";
  document.getElementById("jpyval").innerHTML = "";
  document.getElementById("mxnval").innerHTML = "";
}

// jquery script to
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

  $('#usamt').focus(function() {
          $(this).css('background-color','antiquewhite');
      }); 
});