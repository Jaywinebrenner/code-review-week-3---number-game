//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }
   var inputArray = [];
   for (var i = 0; i <= num; i++){
     alert(num)
     inputArray.push(i);
     return inputArray;
     alert("sup")

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
