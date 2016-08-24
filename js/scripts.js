//Business logic
var pingPongTable = [];
function pingPong(digits) {
  pinPongTable = [];
  for (var i = 1; i <= digits; i ++) {
    if ((digits % 5 === 0)&&(digits % 3 === 0)){
      pingPongTable.push("ping pong");
    } else if (digits % 3 === 0){
      pingPongTable.push("ping");
    } else if (digits % 5 === 0){
      pingPongTable.push("pong");
    }else {
      pingPongTable.push(i);
    }
  };
  return pingPongTable;
};
//UI logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    $("#hidden").hide();
    var number = pingPong($("#digits").val());
    for (var i = 0; i < pingPongTable.length; i++){
      $("#hidden").append("<li>" + pingPongTable[i] + "</li>");
      };
    $("#hidden").slideDown();

    event.preventDefault();
  });
});
