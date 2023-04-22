
// search() - check for valid entry.  If valid, it will count the number of occurences with the provided key, 
// and the sentences or phrases.
function search()
{

  if($("#searchform").valid()) {

    var searchedKey = (document.getElementById("searchedkey").value).toLowerCase();
    var sourcePhrase = (document.getElementById("paragraph").value).toLowerCase();
  
    var count = 0;
    for(var i=0; i<sourcePhrase.length; i++) {
      if(sourcePhrase.charAt(i) == searchedKey) {
        count++;
      }
    }

    //Clear previous result if any.
    resetResult();

    if(count) {
      // Recording result in a table
      var result = '<table class="table table-striped table-hover">' + 
      '<thead><tr>  <th>Search Key<\/th>  <th>Search In Phrases/Paragraph<\/th>' +
      '<th>Total Number Of Occurence Found<\/th>' + 
      '<\/tr><\/thead>' +
      '<tr><td>' + document.getElementById("searchedkey").value + '<\/td><td>' + 
      document.getElementById("paragraph").value + 
      '<\/td><td>' + count  + '<\/td><\/tr>';

    // Displaying result
      document.getElementById("result").innerHTML = result;
    } else {
      //When no result found
      resetInput(); //Clear our input fields
  
      var htmlSource = "<!DOCTYPE html>\n";
      htmlSource += "<html lang='en'>\n";
      htmlSource += "<head>\n";
      htmlSource += "<title>Popup Window</title>\n";
      htmlSource += "</head>\n";
      htmlSource += "<body>\n";
      htmlSource += "<div style='margin:0 auto;'>\n";
      htmlSource += '<p>The search character <strong>' + searchedKey + '</strong> not found in the content you typed.' + '</p>\n';
      htmlSource += "</div>\n";
      htmlSource += '<button type="button" id="Close" class="btn btn-primary" onclick="window.close()">Close</button>\n';
      htmlSource += "</body>\n";
      htmlSource += "</html>\n";

      var newWindow = window.open("", "new_window", "top=100,left=100,width=200,height=120");
      newWindow.opener = null; //For security
      newWindow.focus();
      newWindow.document.write(htmlSource); //display message on new popup window.
      newWindow.document.close();
    }

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

// Clear out the input fields
function resetInput()
{
  // document.getElementById("searchedkey").value = "";
  // document.getElementById("paragraph").value = "";
  //Clearing out the input fields and ensure the validation error is reset.
  document.getElementById("submitButton").focus();
  var element = document.getElementById("searchform");
  element.reset();
}


// validate input
$(document).ready(function(){
    $("#searchform").validate({
    // Rules for each input item
    rules:
    {
      searchedkey: { 
        required: true, 
        maxlength: 1
      },
      paragraph: { 
        required: true,
        minlength: 1
      }
    },
    messages: {
      searchedkey: "Please enter ONE character for occurrence search.",
      paragraph: "Please enter a paragraph, sentences, or phrases."
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



  $('#searchedkey').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
      document.getElementById('submitButton').click();
    }
  });

  $('#paragraph').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
      document.getElementById('submitButton').click();
    }
  });