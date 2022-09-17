/*This function is to letting work our simple interest calculator
var principal will get values from input side
var rate will get values from the slider 
var year will get values from the selector 1 to 10 values
var interes will get values from the previous variables
*/

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
// var year is to update the currently year.
    var year = new Date().getFullYear()+parseInt(years);
// this code is to make the button work and print the information from variables with the actual date.
    document.getElementById("result").innerHTML="If you deposit <mark style=\"background: #B0EF5F;\">"+ principal + "</mark>,\<br\>at an interest rate of <mark style=\"background: #B0EF5F;\">" + rate + "</mark>%\<br\>You will receive an amount of <mark style=\"background: #B0EF5F;\">"+ interest + "</mark>,\<br\> in the year <mark style=\"background: #B0EF5F;\">"+ year + "</mark>\. <br\>"
}

// with this function is to set up the slider from html 'input and span'.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}     

/*this funciton is to create an alert when the input is with value
zero or negative. I'll print the message to write a positive number*/
function checkAmount() {
  var validAmount = document.getElementById("principal").value;
  
  if (validAmount  <= 0 || null){
      /*the code means If the number is less than zero
       or zero alert the users*/
    alert("enter a positive number");
        
  } 
}
