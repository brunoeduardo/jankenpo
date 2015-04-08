$(document).ready(function() {
  $(".playAgain").click(function() {
      reflesh();
  });
});

//reload
function reflesh(){
  location.reload();
}

function choice(valor){
 
  //choice calculator
  var computerChoice = Math.random();
  
  if (computerChoice < 0.34) {
    computerChoice = "r";
  } else if(computerChoice <= 0.67) {
    computerChoice = "p";
  } else {
    computerChoice = "s";
  }

  //say choice computer
  choiceVal(computerChoice);
  
  function choiceVal(value){
    if (value == "r"){
      $("#choiceVal").html("Rock");
    }
    if (value == "p"){
      $("#choiceVal").html("Paper");
    }
    if (value == "s"){
      $("#choiceVal").html("Scissors");
    }
  }

  //see who win
  compare(computerChoice, valor);

  function compare(choiceComputer, choicePlayer) {
    
    //add background
    $("#back").css("display" , "block");
    
    //Draw
    if(choiceComputer == choicePlayer) {
      $("#tie").css("display" , "block");
      var number = 3;
      (function start(){
        if ((number -1 ) >= 0 ){
          number = number - 1;
          $('#timer').html('0' + number);
          setTimeout(function (){
            "use strict";
            start();
          }, 1000);
        }else{
          reflesh();
        }
      }());
      return false;
    }
        
    //vars for win or lose     
    var win = function(){$("#win").css("display" , "block");};
    var lose = function(){$("#lose").css("display" , "block");}; 

    //if computer choise rock
    if (choiceComputer == "r"){
      if(choicePlayer == "p"){
        win();
      }else {
        lose();
      }
    }

    //if computer choise paper
    if (choiceComputer == "p"){
      if(choicePlayer == "s"){
        win();
      }else {
        lose();
      }
    }

    //if computer choise scissors
    if (choiceComputer == "s"){
      if(choicePlayer == "r"){
        win();
      }else {
        lose();
      }
    }
  }
}
