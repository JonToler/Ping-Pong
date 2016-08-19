//Business logic
function pingPong(digits){
  var ball = parseInt(digits);
  var pinPongTable;


for (i = 1; i <= 100; i ++){
    if ((digits % 5 === 0)&&(digits % 3 === 0)){
      return "ping pong";
    }else if (digits % 3 === 0){
        return "ping";
    }else if (digits % 5 === 0){
        return "pong";

      }
    }
    return ball;
}

//UI logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    $("#btn1").click(function(){
      $("#hidden").append(ball);
    });
    $("#hidden1").hide();
    var number = pingPong($("#digits").val());
    $("#numResults").text(number);
    $("#hidden1").slideDown();
    event.preventDefault();
  });
});
