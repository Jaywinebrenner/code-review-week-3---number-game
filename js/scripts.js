
function beepBoop(userInput){

  var list = [];

  if (isNaN(userInput)) {
    return "Please enter a real number, friend.";
  }

  for (var i = 0; i <= userInput; i++){
    var replace = i;

    if (i.toString().includes(1)){
      replace = "Beep!";

    }
    if (i.toString().includes(2)) {
      replace = "Boop!";

    }
    if (i.toString().includes(3)) {
      replace = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
    list.push(replace);
  }

  return list;
}

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result = beepBoop(userNumber);

      result.forEach(function(resultP){
        $("ul#outputUl").append("<li>" + resultP + "</li>").slideDown("slow");
      });

  });
});
