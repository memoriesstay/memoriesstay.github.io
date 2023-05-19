

$(document).ready(function(){
  
  // JQuery to support the mouse over menu dropdown.
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });

  $("#rateform").validate({
    // Rules for each input item
    rules:
    {
      usamt: { 
        required: true, 
        pattern: '/^\d+.\d{2}$/'
      }
    },
    messages: {
      usamt: "Please positive dollar value."
  
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
  //  $('#usamt').mask('#######0.00');

});  



//Add customize pattern function to validate 4 decimal value.
jQuery.validator.addMethod("pattern", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^\d+.\d{2}$/.test( value );
}, 'Please enter positive value.');


function getExchangeRate() {

  var requestURL = 'https://api.exchangerate.host/latest?base=USD&symbols=EUR,JPY,CNY,CAD'; 
  // var requestURL = 'https://api.exchangerate.host/latest'; 
  var request = new XMLHttpRequest(); 
  request.open('GET', requestURL);
  request.responseType = 'json';
  // request.base = 'USD';
  // request.symbols = 'USD,EUR,JPY,CNY,CAD';
  // let body = JSON.stringify({
  //   base:"USD",
  //   symbols: "USD,EUR,JPY,CNY,CAD",
  //   amount: "1200",
  //   places: "2",
  //   source: "crypto"
  // });
  request.send();

  request.onload = function() {
    var response = request.response;
    console.log(response);
    displayRates(response);
  }


  // console.log(data);  // the previous line and this line are only to debug the program and make sure that we are receiving data!
}

function displayRates(response) {

    // resetResult(); //Reset results

    if($("#rateform").valid()) {

      var userInput = parseFloat(document.getElementById("usamt").value);

      if(response.success) {  // testing if the request was successful
        // show the user details
        var rateLists = response.rates;   // the responseText is where the data is stored 
        // var rateLists = JSON.parse(json);  // here we are turning the string JSON into a native JavaScript object
        var baseCurrency = response.base;
        var rateDate = response.date;
    
        var rateInfo = "<p><strong>Base Currency</strong>: " + baseCurrency + "<br><strong>Date</strong>: " + rateDate;
    
        let table='<thead><tr>  <th>Currency<\/th>  <th>Rate<\/th>  <th>Value<\/th> <\/tr><\/thead>';
    
        var eurValue = (rateLists.EUR)*userInput;
        var jpyValue = (rateLists.JPY)*userInput;
        var cnyValue = (rateLists.CNY)*userInput;
        var cadValue = (rateLists.CAD)*userInput;
    
        eurValue = eurValue.toLocaleString('en-GB', {style:'currency', currency:'EUR', currencyDisplay:'symbol'});
        jpyValue = jpyValue.toLocaleString("jp-JP", {style:"currency", currency:"JPY"});
        cnyValue = cnyValue.toLocaleString('en-CN', {style:'currency', currency:'CNY'});
        cadValue = cadValue.toLocaleString('en-CA', {style:'currency', currency:'CAD'});
        console.log("eurValue: " + eurValue + ". Japan: " + jpyValue + ". Chinese Yuan: " + cnyValue + ". Canadian Dollar: " + cadValue);

        //  request.symbols = 'USD,EUR,JPY,CNY,CAD';
          table += '<tr><td>Euro</td><td class="number">' + (rateLists.EUR).toFixed(2) + '<td class="number">' + eurValue + "</td></tr>" +
          '<tr><td>Japanese Yen</td><td class="number">' + (rateLists.JPY).toFixed(2) + '<td class="number">' + jpyValue + "</td></tr>" +
          '<tr><td>Chinese Yuan</td><td class="number">' + (rateLists.CNY).toFixed(2) + '<td class="number">' + cnyValue + "</td></tr>" +
          '<tr><td>Canadian Dollar</td><td class="number">' + (rateLists.CAD).toFixed(2) + '<td class="number">' + cadValue + "</td></tr>";
        
    
        // Display an image at a selected random number
        document.getElementById("rateinfo").innerHTML = rateInfo;
        document.getElementById("demo").innerHTML = table;
        console.log(table);
    
      } else {
        // show an error
        console.log(">>>Error Occur with Status: " + response.status);
      }

      
    } else {
      // Displaying error message.
      document.getElementById("msg").innerHTML = ("Please enter positive value.");
    }



}

function formatNumber(x) {
  console.log("X=" + x + ". change format? " + x.toLocaleString("en-US"));
  return x.toLocaleString("en-US");
}