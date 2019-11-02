//
// After a thoroughly demoralizing go on Friday, I had a breakthrough with loops and how they work. Also with arrays and toString() that really was a relief. I requested a meeting when I turned in the work at the 5o'clock deadline, but I feel as if I have it under control at this point. I am happy to meet, but not necessary as I know this class is packed.


function beepBoop(userInput){

  var list = [];

  if (isNaN(userInput)) {
    return "Please enter a real number, friend.";
  }

  for (var i = 0; i <= userInput; i++){
    var replace = i;

    if (i.toString().includes(1)){
      var replace = "Beep!";

    }
    if (i.toString().includes(2)) {
      var replace = "Boop!";

    }
    if (i.toString().includes(3)) {
      var replace = "I'm sorry, Dave. I'm afraid I can't do that.";
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
