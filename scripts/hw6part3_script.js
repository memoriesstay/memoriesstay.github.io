
// process() - check for valid entry.  If valid, it will display different type of  math rounding connversions, 
// squareroot of the entry
function process()
{
  //Clear previous result if any.
  resetResult();

  if($("#mathform").valid()) {

    var userInput = document.getElementById("usr_input").value;
    const phoneformat =/\((?<areacode>\d{3})\)\s(?<prefix>\d{3})-(?<phoneline>\d{4})/;
    const matcharray = phoneformat.exec(userInput);
    
    // console.log("result " + matcharray.groups);
  // Displaying result
    document.getElementById("areacode").value = matcharray.groups.areacode;
    document.getElementById("prefix").value = matcharray.groups.prefix;
    document.getElementById("phoneline").value = matcharray.groups.phoneline;
  } else {
    // Displaying error message.
    document.getElementById("msg").innerHTML = ("Please fix the error requested above.");
  }

}

// Clear out the previous run result.
function resetResult()
{
  // document.getElementById("result").innerHTML = "";
  document.getElementById("msg").innerHTML ="";
  document.getElementById("areacode").value = "";
  document.getElementById("prefix").value = "";
  document.getElementById("phoneline").value = "";
}

// validate input
$(document).ready(function(){
    $("#mathform").validate({
    // Rules for each input item
    rules:
    {
      usr_input: { 
        required: true, 
        pattern: '/^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/'
      }
    },
    messages: {
      usr_input: "Please enter phone number with format (415) 123-4567, or 4151234567."

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
   $('#usr_input').mask('\(000\) 000-0000');
  });

  //Add customize pattern function to validate 4 decimal value.
  jQuery.validator.addMethod("pattern", function(value, element) {
    // allow any non-whitespace characters as the host part
    return this.optional( element ) || /^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/.test( value );
  }, 'Please enter phone number with format (999) 999-9999, or 4151234567.');

  $('#usr_input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
      document.getElementById('submitButton').click();
    }
  });