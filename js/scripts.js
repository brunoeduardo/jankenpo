function choice(valor){
  var computerChoice = Math.random();

  if (computerChoice < 0.34) {
    computerChoice = "r";
  } else if(computerChoice <= 0.67) {
    computerChoice = "p";
  } else {
    computerChoice = "s";
  }
  compare(computerChoice, valor);

  function compare(choiceComputer, choicePlayer) {
    
    //add background
    document.getElementById("back").style.display="block";
    
    //Draw
    if(choiceComputer == choicePlayer) {
      document.getElementById("tie").style.display="block";
      var number = 3;
      (function start(){
        if ((number -1 ) >= 0 ){
          number = number - 1;
          document.getElementById('timer').textContent = '0' + number;
          setTimeout(function (){
            "use strict";
            start();
          }, 1000);
        }else{
          location.reload();
        }
      }());
      return false;
    }
        
    //vars     
    var win = function(){document.getElementById("win").style.display="block";};
    var lose = function(){document.getElementById("lose").style.display="block";}; 

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
