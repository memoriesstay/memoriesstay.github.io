
function goToNewPage(myForm) {
  var myDestination = myForm.res_list.options[myForm.res_list.selectedIndex].value;
  window.open(myDestination, "_blank");
}
