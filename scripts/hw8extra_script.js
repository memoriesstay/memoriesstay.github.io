

$(document).ready(function(){
  
  // JQuery to support the mouse over menu dropdown.
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });

});  


function getExchangeRate() {

  var requestURL = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,JPY,CNY,CAD'; 
  var request = new XMLHttpRequest(); 
  request.open('GET', requestURL);
  request.responseType = 'json';
  // request.base = 'USD';
  // request.symbols = 'USD,EUR,JPY,CNY,CAD';
  let body = JSON.stringify({
    base: "USD",
    symbols: "USD,EUR,JPY,CNY,CAD"
  });
  request.send(body);

  request.onload = function() {
    var response = request.response;
    console.log(response);
  }

  displayRates(request);
  // console.log(data);  // the previous line and this line are only to debug the program and make sure that we are receiving data!
}

function displayRates(request) {
  if(request.success) {  // testing if the request was successful
    // show the user details
	  var json = request.responseText;   // the responseText is where the data is stored 
    var rateResult = JSON.parse(json);  // here we are turning the string JSON into a native JavaScript object
    var baseCurrency = rateResult.base;
    var rateDate = rateResult.date;
    var rateLists = rateResult.rates;
    var rateInfo = "<p><strong>Base Currency</strong>: " + baseCurrency + "<br><strong>Date</strong>: " + rateDate;

    let table='<thead><tr>  <th>Currency<\/th>  <th>Rate<\/th> <\/tr><\/thead>';

    //  request.symbols = 'USD,EUR,JPY,CNY,CAD';
      table += "<tr><td>" +
      "Euro" +
      "</td><td>" +
      rateLists.EUR +
      "</td><td>" +
      "Japanese Yen" +
      "</td><td>" +
      rateLists.JPY +
      "</td><td>" +
      "Chinese Yuan" +
      "</td><td>" +
      rateLists.CNY +
      "</td><td>" +
      "Canadian Dollar" +
      "</td><td>" +
      rateLists.CAD +
      "</td></tr>";
    

    // Display an image at a selected random number
    document.getElementById("rateinfo").innerHTML = rateInfo;
    document.getElementById("demo").innerHTML = table;
    console.log(table);

  } else {
    // show an error
    console.log(">>>Error Occur with Status: " + request.status);
  }

}