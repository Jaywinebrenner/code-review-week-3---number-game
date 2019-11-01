//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }

   // var inputNumbers = [];
   for (var i = 0; i <= num; i ++){
     return i;
     console.log(i);
     // inputNumbers += (i);
     // inputNumbers.split(" ");
     // inputNumbers.push(inputNumbers)
     //  console.log(inputNumbers);

     // inputArray.push(i);
     // return inputArray;



   }


}



$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());


    var result = beepBoopFunction(userNumber);


      $("ul#outputUl").append("<li>" + result + "</li>");








  });
});
