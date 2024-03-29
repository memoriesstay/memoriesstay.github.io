
// process() - Display message according to valid and invalid data submitted.
function process()
{
  resetResult();
  if($("#censusform").valid()) {

    // State Abbr, State Name, Capital Population
    var census_data = [
        ['AL', 'Alabama', 'Montgomery', 4903185],
        ['AK', 'Alaska', 'Juneau', 731545],
        ['AZ', 'Arizona', 'Phoenix', 7278717],
        ['AR', 'Arkansas', 'Little Rock', 3017825],
        ['CA', 'California', 'Sacramento', 39512223],
        ['CO', 'Colorado', 'Denver', 5758736]
      ]

    var usr_input = (document.getElementById('state').value).toUpperCase();
    var stateList="", matchedFound=false;
    var result = "Sorry, we do not have information about this state!  We only have information for State: ";
    console.log("User Input: " + usr_input);
    var curData;

    // Find a matched
    for (var i = 0; i< census_data.length; i++) {
      curData = census_data[i];
      stateList += curData[1] + " - " + curData[0] + ", "; //Keep track of the State list
      //Compare until found item looking for.
      if(curData[0].toUpperCase() == usr_input || curData[1].toUpperCase() == usr_input) {
        //Overrite the result as matched is found
        result = "Thanks for your inquiry, here is the information you requested: <br>" +
        '<table class="table table-striped table-hover">' + 
        '<thead><tr>  <th>State Abbr<\/th>  <th>State Name<\/th>  <th>Capital<\/th>  <th>Population<\/th><\/tr><\/thead>' +
        '<tr><td>' + curData[0] + '<\/td><td>' + curData[1] + '<\/td><td>' + curData[2] + '<\/td><td>' + curData[3].toLocaleString() + '<\/td><\/tr>';
        matchedFound = true;
        break; //Break out of the loop once match is found.
      }
      
    }

    if(!matchedFound) {
      //If not found, append mesage with the list of States we have data for.
      result += stateList.substring(0, (stateList.length - 2)) + ".";
    }
    
    document.getElementById("result").innerHTML = result;
  } else {
    //Display error message when user didn't provide required input data.
    document.getElementById("msg").innerHTML = ("Please enter State Name in Full or Abbreviation.");
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
    $("#censusform").validate({
    // Rules for each input item
    rules:
    {
      state: { required: true, minlength: 2 },
    },
    messages: {
      state: {
        required: "Please enter a State name (abbr. or full)",
        minlength: "State name must consist of at least 2 characters."
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

  //Enable enter key to act like clicking on Submit Button
  $('#state').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      event.preventDefault();
      document.getElementById('submitButton').click();
    }
  });