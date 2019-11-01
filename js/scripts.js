//business logic

function beepBoopFunction(num){

 return num;

}



$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#formInput").val());
    var result= beepBoopFunction(userNumber);

    $("ul#outputUl").append("<li>" + result + "</li>");

  });
});
