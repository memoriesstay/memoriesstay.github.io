

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
        number: true
      }
    },
    messages: {
      usamt: {
        required: "Please US amount for conversion calculation.",
        number: "Please enter a number."
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

function getExchangeRate() {

  if($("#rateform").valid()) {

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

  } 

}

function displayRates(response) {

  if($("#rateform").valid()) {

    var userInput = parseFloat(document.getElementById("usamt").value);

    if(response.success) {  // testing if the request was successful
      // show the user details
      var rateLists = response.rates;   //Get rate list {CAD: 1.348533, CNY: 7.030206, EUR: 0.927181, JPY: 138.221448} 
      var baseCurrency = response.base; //base currency
      var rateDate = response.date;     //Rate at as of date
  
      var rateInfo = "<p><strong>Base Currency</strong>: " + baseCurrency + "<br><strong>Date</strong>: " + rateDate;
  
      let table='<thead><tr>  <th>Currency<\/th>  <th>Rate<\/th>  <th>Value<\/th> <\/tr><\/thead>';
  
      // Perform the rate conversion
      var eurValue = (rateLists.EUR)*userInput;
      var jpyValue = (rateLists.JPY)*userInput;
      var cnyValue = (rateLists.CNY)*userInput;
      var cadValue = (rateLists.CAD)*userInput;
  
      // Format Currency display base on each currency region
      eurValue = eurValue.toLocaleString('en-GB', {style:'currency', currency:'EUR', currencyDisplay:'symbol'});
      jpyValue = jpyValue.toLocaleString("jp-JP", {style:"currency", currency:"JPY"});
      cnyValue = cnyValue.toLocaleString('en-CN', {style:'currency', currency:'CNY'});
      cadValue = cadValue.toLocaleString('en-CA', {style:'currency', currency:'CAD'});
      // console.log("eurValue: " + eurValue + ". Japan: " + jpyValue + ". Chinese Yuan: " + cnyValue + ". Canadian Dollar: " + cadValue);

      //  request.symbols = 'USD,EUR,JPY,CNY,CAD';
      // Recording rate and conversion into table
        table += '<tr><td>Euro</td><td class="number">' + (rateLists.EUR).toFixed(2) + '<td class="number">' + eurValue + "</td></tr>" +
        '<tr><td>Japanese Yen</td><td class="number">' + (rateLists.JPY).toFixed(2) + '<td class="number">' + jpyValue + "</td></tr>" +
        '<tr><td>Chinese Yuan</td><td class="number">' + (rateLists.CNY).toFixed(2) + '<td class="number">' + cnyValue + "</td></tr>" +
        '<tr><td>Canadian Dollar</td><td class="number">' + (rateLists.CAD).toFixed(2) + '<td class="number">' + cadValue + "</td></tr>";
      
  
      // Display rate table to web page.
      document.getElementById("rateinfo").innerHTML = rateInfo;
      document.getElementById("demo").innerHTML = table;
      // console.log(table);
  
    } else {
      // show an error
      console.log(">>>Error Occur with Status: " + response.status);
    }

    
  }

}

// Handling user pressing enter key
$('#usamt').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    event.preventDefault();
    document.getElementById('getrate').click();
  }
});