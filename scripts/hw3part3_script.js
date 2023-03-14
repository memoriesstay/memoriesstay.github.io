// calculateCelsius() read in user input and then perform temperature conversion to Celsius
function calculateCelsius() {
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

// calculateFarenhait() read in user input and then perform temperature conversion to Celsius
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

function resetTemperature() {
  document.getElementById("textresult").value ="";
  document.getElementById("tempval").focus();
}



$(document).ready(function(){


  $( "#temperature" ).validate( {
    rules: {
      tempval: {
        required: true,
        number: true
      }
    },
    messages: {
      tempval: "Please enter a temperature value."
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