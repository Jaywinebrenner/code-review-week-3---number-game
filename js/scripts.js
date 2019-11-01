//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }

   var numberArray = [];
   for (var i = 0; i <= num; i ++){
     numberArray.push(i);
     var beep = "BEEP!";
   };

   var stringNumbers = numberArray.toString();
   console.log(stringNumbers);

   if (stringNumbers.includes(2)) {
      return  stringNumbers.replace(/2/g, "BEEP");
        console.log(stringNumbers);
   }



   console.log(stringNumbers);


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
