
function beepBoop(input){

  var outputArray = [];

  if (isNaN(input)) {
    return "Please enter a real number, friend.";
  }

  for (var i = 0; i <= input; i++){

    var word = i;

    if(i.toString().includes(1)) {
      word = "BEEP";
    }
    if(i.toString().includes(2)) {
      word = "BOOP";
    }
    if(i.toString().includes(3)) {
      word = "I'm sorry, Dave. I'm afraid I can't do that.";
    }

    outputArray.push(word);
    }

    return outputArray;

  }

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result = beepBoop(userNumber);
    console.log(result);

    result.forEach(function(resultP){
      $("ul#outputUl").append("<li>" + resultP + "</li>").slideDown("slow");
    });

  });
});
