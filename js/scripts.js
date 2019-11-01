//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }

   var numberArray = [];
   for (var i = 0; i <= num; i ++){
     numberArray.push(i);



     // inputNumbers += (i);
     // inputNumbers.split(" ");
     // inputNumbers.push(inputNumbers)
     //  console.log(inputNumbers);

     // inputArray.push(i);
     // return inputArray;



   }
   console.log(numberArray);
   return numberArray;


}



$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result = beepBoopFunction(userNumber);
    result.forEach(function(resultP){

    })

      $("ul#outputUl").html("<li>" + result + "</li>");
        // $("p").html(result);

  });
});
