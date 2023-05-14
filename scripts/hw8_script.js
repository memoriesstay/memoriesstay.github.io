

$(document).ready(function(){
  
  // JQuery to support the mouse over menu dropdown.
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });

});  

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table='<thead><tr>  <th>Artist<\/th>  <th>Title<\/th>  <th>Year<\/th><\/tr><\/thead>';

  var curYear = new Date().getFullYear();

  for (let i = 0; i <x.length; i++) { 
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue = "Angel Chung";
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue = curYear;

    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }

  console.log(table);
  document.getElementById("demo").innerHTML = table;
}