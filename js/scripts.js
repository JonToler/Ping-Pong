//Business logic
function pingPong(digits){
  var pingInNumType = parseInt(digits);
  var pinPongTable;
  var arrOfnumsInStringType = digits.split("");
  alert (digits);
  alert (arrOfnumsInStringType);
  if ((arrOfnumsInStringType <0) || (arrOfnumsInStringType >=50)){
    return "please enter a new Number:";
  }

  return digits;
}














//UI logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    $("#hidden1").hide();
    var number = pingPong($("#digits").val());
    $("#numResults").text(number);
    $("#hidden1").slideDown();
  });
});
