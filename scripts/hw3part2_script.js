
// Calculate Seller's weekly earning + commission based on his/her sale performance.
function saleCommission()
{
  resetSaleComResult(); // To ensure previous run result is clear out.

  // Read in the 4 numbers: item1, item2, item3, item4
  var qty1, qty2, qty3, qty4, errMsg, price1, price2, price3, price4, salerep;
  var o = { style: "currency", currency: "USD", currencyDisplay:"symbol"};
  qty1 = parseInt(document.forms["sale"].elements["item1"].value);
  qty2 = parseInt(document.forms["sale"].elements["item2"].value);
  qty3 = parseInt(document.forms["sale"].elements["item3"].value);
  qty4 = parseInt(document.forms["sale"].elements["item4"].value);

  // Read in the prices
  price1 = parseFloat((document.getElementById("price1").innerHTML).substring(1)); //Strip out the $
  price2 = parseFloat((document.getElementById("price2").innerHTML).substring(1));
  price3 = parseFloat((document.getElementById("price3").innerHTML).substring(1));
  price4 = parseFloat((document.getElementById("price4").innerHTML).substring(1));
  salerep = document.forms["sale"].elements["sname"].value;
  if((salerep === "") || salerep == null){
    errMsg = "Seller's Name is required.";
  } else if(isNaN(qty1) || isNaN(qty2) || isNaN(qty3) || isNaN(qty4)) {
    errMsg = "Run Error: One or more fields not enter.  Please make sure all fields are entered.";
  } else if (qty1 < 0 || qty2 < 0 || qty3 < 0  || qty4 < 0) {
    errMsg = "Run Error: One or more values are negative.  Please amount 0 or greater.";
  } else {
    //Calculate Commission
    var basePay = 250, commissionRate=0.09, totalSold, totalEarn, total1, total2, total3, total4;
    total1 = qty1*price1;
    total2 = qty2*price2;
    total3 = qty3*price3;
    total4 = qty4*price4;
    totalSold = total1 + total2 + total3 + total4;
    totalEarn = totalSold * commissionRate + basePay;
    //Displaying Results
    document.getElementById("qty1").innerHTML = qty1;
    document.getElementById("qty2").innerHTML = qty2;
    document.getElementById("qty3").innerHTML = qty3;
    document.getElementById("qty4").innerHTML = qty4;

    // document.getElementById("total1").innerHTML = total1.toFixed(2);
    // document.getElementById("total2").innerHTML = total2.toFixed(2);
    // document.getElementById("total3").innerHTML = total3.toFixed(2);
    // document.getElementById("total4").innerHTML = total4.toFixed(2);

    document.getElementById("total1").innerHTML = total1.toLocaleString("en", o);
    document.getElementById("total2").innerHTML = total2.toLocaleString("en", o);
    document.getElementById("total3").innerHTML = total3.toLocaleString("en", o);
    document.getElementById("total4").innerHTML = total4.toLocaleString("en", o);

    document.getElementById("totalsold").value = totalSold.toLocaleString("en", o);
    document.getElementById("totalearn").value = totalEarn.toLocaleString("en", o);
    document.getElementById('totalearn').scrollIntoView();
  }

    //Display Error or Retake Message if not empty 
    if (errMsg){
      document.getElementById("msgsale").innerHTML = errMsg;
    }
}

function formatNumber(x) {
  console.log("X=" + x + ". change format? " + x.toLocaleString("en-US"));
  return x.toLocaleString("en-US");
}

// Clear the previous Sale Commission Calculation
function resetSaleComResult() 
{
  document.getElementById("totalsold").value = "";
  document.getElementById("totalearn").value = "";
  document.getElementById("msgsale").innerHTML = "";

  for(i = 1; i <= 4; i++) {
    document.getElementById("qty" + i).innerHTML = "";
    document.getElementById("total" + i).innerHTML = "";
  }
}

$(document).ready(function(){

  //Display the mouseover tooltip displaying on the Seller's Name Field
  $("sname").tooltip();

  $("#sale").validate({
    rules: {
      name: { 
        required: true
       }
      }

  });

  $(".dropdown").hover(function(){
    var dropdownMenu = $(this).children(".dropdown-menu");
    if(dropdownMenu.is(":visible")){
        dropdownMenu.parent().toggleClass("open");
    }
  });
 
});