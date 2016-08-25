//Business logic
function pingPong(number) {
  pinPongTable = [];
  pingPongTable = [];
  for (var i = 1; i <= number; i ++) {
    if ((i % 5 === 0)&&(i % 3 === 0)){
      pingPongTable.push("ping pong");
    } else if (i % 3 === 0){
      pingPongTable.push("ping");
    } else if (i % 5 === 0){
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
    var arrNumber = $("#digits")
    var number = pingPong($(arrNumber).val());
    for (var i = 0; i < pingPongTable.length; i++){
      $("#hidden").append("<li>" + pingPongTable[i] + "</li>");
      };
    $("#hidden").slideDown();

    event.preventDefault();
  });
});
