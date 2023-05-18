

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
  let table='<thead><tr>  <th>Title<\/th>  <th>Artist<\/th>  <th>Year<\/th><\/tr><\/thead>';

  // var curYear = new Date().getFullYear();

  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }

  // console.log(table);
  document.getElementById("demo").innerHTML = table;
}

function getMeme() {

  var url = 'https://api.imgflip.com/get_memes';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);   // doing a get and the URL will be the URL above
  xmlhttp.send();

  // var data = xmlhttp.responseText;   // data will receive the response from the request
  displayMeme(xmlhttp);
  // console.log(data);  // the previous line and this line are only to debug the program and make sure that we are receiving data!
}

function displayMeme(xmlhttp) {
  if(xmlhttp.status === 200) {  // testing if the request was successful
    // show the user details
	  var json = xmlhttp.responseText;   // the responseText is where the data is stored 
    var memeResult = JSON.parse(json);  // here we are turning the string JSON into a native JavaScript object
    var memeList = memeResult.data.memes;
    // console.log(memeList);
    var memeLength = memeList.length;
    var randNumber = Math.floor(Math.random() * memeLength);
    console.log("Length: " + memeLength + ". Random Number: " + randNumber);

    var img_width, img_height;
    if(memeList[randNumber].width > 600 || memeList[randNumber].height > 600) {
      //Reducing the image size to 50%
      img_width = (memeList[randNumber].width)*0.5;
      img_height = (memeList[randNumber].height)*0.5;
    } else {
      // use original image size
      img_width = memeList[randNumber].width;
      img_height = memeList[randNumber].height;
    }

    // Display an image at a selected random number
    document.getElementById('meme').innerHTML = '<img src="' + memeList[randNumber].url + '"  width="' +
    img_width + '" height="' + img_height + '">' + 
      '<figcaption><strong>Image Name:</strong> ' + memeList[randNumber].name + '</figcaption>';
  } else {
    // show an error
    console.log(">>>Error Occur with Status: " + xmlhttp.status);
  }

}