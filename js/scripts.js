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

   var boopArray = ["BEEP!", "BOOP!", "I'm sorry, Dave. I'm afraid I can't do that."]
   if (numberArray.includes(2)) {

   function element_replace() {

      var ele = Array(10, 20, 300, 40, 50);

      ele[ele.map((x, i) => [i, x]).filter(
        x => x[1] == 300)[0][0]] = 30
      }
      // console.log(ele); [10,10,30,40,50]

     console.log("there is a 2");
   }

   return numberArray;
   console.log(numberArray);


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
