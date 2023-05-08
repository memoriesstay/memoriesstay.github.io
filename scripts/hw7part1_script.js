

/* Change Background color, font formating, and font size.*/
function applyformat() 
{
  // Checking is any of the options are being selected.
   var checked_boxes = document.querySelectorAll('[name^="fontstyle"]:checked');
   var radio_button = document.querySelector('input[name^="bgcolor"]:checked');
   var fontsize = document.querySelector("#fontsize");
   var idList = "";

   //If Background color is selected, add id to the list
   if(radio_button) {
    idList += radio_button.id + " ";
   }

   //If font styles selected, add to the list.
   if(checked_boxes) {
    for (var i=0; i<checked_boxes.length; i++) {
      idList += checked_boxes[i].id + " ";
     }
   }

   //If font size is selected, add to the list.
   if(fontsize) {
    idList += fontsize.value;
   }

  //remove the heading and tailing spaces
  idList = idList.trim();

  //get the element with id usrformat, which is one of the div where the paragraphs are in
  var fontformat = document.getElementById("usrformat");
  fontformat.className = idList;
    
}

// JQuery to support the mouse over menu dropdown.
$(document).ready(function(){
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });
});  