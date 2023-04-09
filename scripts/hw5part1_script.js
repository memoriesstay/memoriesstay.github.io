
// process() - Display message according to valid and invalid data submitted.
function process()
{
  resetResult();
  if($("#researchform").valid()) {

    // Display the entered numbers, and other results
    document.getElementById("result").innerHTML = ('<span class="glyphicon glyphicon-check"></span><strong>Thanks, your data was submitted!</strong>');
  } else {
    document.getElementById("msg").innerHTML = ("Please fix all errors display above.");
  }

}

//Clear out the previous run result.
function resetResult()
{
  document.getElementById("result").innerHTML = "";
  document.getElementById("msg").innerHTML ="";
}

// validate input
$(document).ready(function(){
    $("#researchform").validate({
    // Rules for each input item
    rules:
    {
      fullName: { required: true, minlength: 2 },
      agegroup: { required: true},
      fav_browser: { required: true },
      movie_type: {required: true}
    },
    messages: {
        fullName: {
        required: "Please enter full name.",
        minlength: "Your name must consist of at least 2 characters."
      }
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