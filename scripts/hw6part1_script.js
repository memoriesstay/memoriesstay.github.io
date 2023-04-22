
// process() - check for valid entry.  If valid, it will display different type of  math rounding connversions, 
// squareroot of the entry
function process()
{
  //Clear previous result if any.
  resetResult();

  if($("#mathform").valid()) {

    var userInput = parseFloat(document.getElementById("usr_input").value);
    var sqrRoot = Math.sqrt(userInput);

    // Recording result
    var result = '<table class="table table-striped table-hover">' + 
     '<thead><tr>  <th>User Input<\/th>  <th>Rounded To Nearest Integer<\/th>' +
     '<th>Square Root Rounded To Integer<\/th>' + 
     ' <th>Rounded To Nearest 10th Position<\/th>' + 
     ' <th>Rounded To The Nearest 100th Position<\/th>' + 
     ' <th>Rounded To The Nearest 1000th Position<\/th>' + 
     '<\/tr><\/thead>' +
    '<tr><td>' + userInput + '<\/td><td>' + Math.round(userInput) + 
    '<\/td><td>' +  Math.round(sqrRoot) + '<\/td><td>' + userInput.toFixed(1) + 
    '<\/td><td>' + userInput.toFixed(2)  + 
    '<\/td><td>' + userInput.toFixed(3) + '<\/td><\/tr>';

  // Displaying result
    document.getElementById("result").innerHTML = result;
  } else {
    // Displaying error message.
    document.getElementById("msg").innerHTML = ("Please fix the error requested above.");
  }

}

// Clear out the previous run result.
function resetResult()
{
  document.getElementById("result").innerHTML = "";
  document.getElementById("msg").innerHTML ="";
}

// validate input
$(document).ready(function(){
    $("#mathform").validate({
    // Rules for each input item
    rules:
    {
      usr_input: { 
        required: true, 
        number: true, 
        min: 0,
        pattern: '/^[0-9]+\.[0-9]{4}$/'
      }
    },
    messages: {
      usr_input: "Please enter a positive number with at least 4 decimals."

    },
    errorPlacement: function(error, element) 
    {
        if ( element.is(":radio")) 
        {
            error.appendTo( element.parents('.radio') );
        } else if (element.is(":checkbox") ) {
            error.insertAfter( element.parents('.checkbox') );
        } else if (element.is('select')){
          error.insertBefore(element);
        }
        else 
        { // This is the default behavior 
            error.insertAfter( element );
        }
     }
   });
  });

  //Add customize pattern function to validate 4 decimal value.
  jQuery.validator.addMethod("pattern", function(value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional( element ) || /^[0-9]+\.[0-9]{4,}$/.test( value );
  }, 'Please enter positive number with at least 4 decimals.');

  $('#usr_input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
      document.getElementById('submitButton').click();
    }
  });