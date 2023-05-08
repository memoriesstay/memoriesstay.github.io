
// process() - calculate sum and product
function process()
{
    var sum4=0, product4=1, sumMsg, productMsg;
    sumMsg = "";
    productMsg = "";
    //Calculate sum & product of every fourth number between 5 to 25 inclusive
    for (var i=5;i<=25; i+=4)
    {
        sum4 += i;
        product4 *= i;
        sumMsg = sumMsg + " " + i + " +";
        productMsg = productMsg + " " + i + " *";
    }

    // strip out last + or *
    sumMsg = sumMsg.slice(0, -1)
    productMsg = productMsg.slice(0, -1);

    //Display Result 
    document.getElementById("sum4").innerHTML = "The result of <strong>" + sumMsg + " is " + sum4.toLocaleString() + "</strong>.";
    document.getElementById("product4").innerHTML  = "The result of <strong>" + productMsg + " is " + product4.toLocaleString() + "</strong>.";

    // Calculate sum & product of third number between 3 to 18
    var j=3, sum3=0, product3=1, sumMsg3, productMsg3;
    sumMsg3 = "";
    productMsg3 = "";
    
    while (j <= 18)
    {
        sum3 += j;
        product3 *= j;
        sumMsg3 = sumMsg3 + " " + j + " +";
        productMsg3 = productMsg3 + " " + j + " *";
        j += 3; //increment counter by 3
    }

    // strip out last + or *
    sumMsg3 = sumMsg3.slice(0, -1)
    productMsg3 = productMsg3.slice(0, -1);

    //Display Result
    document.getElementById("sum3").innerHTML = "The result of <strong>" + sumMsg3 + " is " + sum3.toLocaleString() + "</strong>.";
    document.getElementById("product3").innerHTML  = "The result of <strong>" + productMsg3 + " is " + product3.toLocaleString() + "</strong>.";

}

// JQuery function to enable user to drag an element anywhere around the window.
$(document).ready(function(){

    $( "#draggable" ).draggable();

    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});