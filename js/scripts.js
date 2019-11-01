//business logic

function beepBoopFunction(num){
  if (isNaN(num)){
    return "Please enter a number that currently exists.";
  }
   var inputArray = [];
   for (var i = 0; i <= num; i++){
     inputArray.push(num[i]);
     console.log(inputArray);

   }


  // for(var i = 0; i < sentenceSplit.length; i++){
  //       outputArray.push(sentenceSplit[i].charAt(0).toUpperCase() + sentenceSplit[i].slice(1));


}



$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result= beepBoopFunction(userNumber);

    $("ul#outputUl").append("<li>" + result + "</li>");

  });
});
