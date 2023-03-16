
// Print square using * and the user input number
function process()
{
    var usrValue, errMsg, minNumber=2, maxNumber=10;
    usrValue = parseInt(document.forms["drawsquare"].elements["usrinput"].value);
    resetResult();
    if(isNaN(usrValue)) {
        // Handling user missing input fields
        errMsg = "Run Error: Please enter a number.";
      } else if(!between(usrValue, minNumber, maxNumber)) {
        // Handling input out of range
        errMsg = `Input is <b>not between ${minNumber} and ${maxNumber}.<b>  Please enter a number between ${minNumber} and ${maxNumber}.`;
      }
      else {  
        //Draw a square
        //Draw * Row
        var drawSquare="";
        for(var row=0; row < usrValue; row++) {
            //Draw * Column
            for(var col=0; col<usrValue; col++) {
                //if 1st and last row, all *
                if(row == 0 || row == (usrValue - 1)) {
                  drawSquare = drawSquare + "*&nbsp;";
                } else {
                    //* for first and last column
                    if(col==0) {
                        drawSquare = drawSquare + "*&nbsp;";
                    } else if(col == (usrValue - 1)) {
                        drawSquare = drawSquare + "*";
                    } else {
                        //draw a space
                        drawSquare = drawSquare + "&nbsp;&nbsp;";
                    }
                }

            }
            drawSquare = drawSquare.replace(/&nbsp;$/,'') + "<br>";
        }

        document.getElementById("displaysquare").innerHTML = drawSquare;
        // console.log("drawSquare: " + drawSquare);

      }

  //Display Error or Retake Message if not empty 
  if (errMsg){
    document.getElementById("msgwrong").innerHTML = errMsg;
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
  document.getElementById("msgwrong").innerHTML = "";
  document.getElementById("displaysquare").innerHTML = "";
}


$('#usrinput').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    event.preventDefault();
     console.log('You pressed a "enter" key in textbox, here submit your form'); 
    document.getElementById('submitButton').click();
  }
});