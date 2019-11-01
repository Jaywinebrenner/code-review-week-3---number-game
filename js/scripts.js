//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }

   var numberArray = [];
   for (var i = 0; i <= num; i ++){
     numberArray.push(i);
   };

   // var stringNumbers = numberArray.toString();
   var sorry = "I'm sorry, Dave. I'm afraid I can't do that.";

   for (var i = 0; i <= numberArray.length; i ++){
     if (numberArray.includes(3)) {
        console.log(numberArray);
        var numberArray = numberArray.splice(num, sorry);
        console.log(numberArray);
     }
   };




   // if (numberArray.includes(3)) {
   //
   //    var numberArray = numberArray.replace(3, sorry);
   // }
   //
   // if (numberArray.includes(2)) {
   //    var numberArray = numberArray.replace(2, "BOOP");
   // }
   //
   // if (numberArray.includes(1)) {
   //    var numberArray = numberArray.replace(1, "BEEP");
   // }








   console.log(numberArray);
   return numberArray;

   // var stringedArray = numberArray.toString();

   // return numberArray;


};





$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result = beepBoopFunction(userNumber);

    // result.forEach(function(resultP){
        $("ul#outputUl").append("<li>" + result + "</li>");
    // });



        // $("p").html(result);

  });
});
