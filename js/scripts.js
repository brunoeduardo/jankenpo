function choice(valor){
  var computerChoice = Math.random();

  if (computerChoice < 0.34) {
    computerChoice = "r";
  } else if(computerChoice <= 0.67) {
    computerChoice = "p";
  } else {
    computerChoice = "s";
  }
  compare(valor, computerChoice);


  function compare(choiceComputer, choicePlayer) {
    
    //Draw
    if(choiceComputer == choicePlayer) {
      document.getElementById("tie").style.display="block";
      document.getElementById("back").style.display="block";
      var number = 6;
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


    if (choiceComputer == "r"){
      if(choicePlayer == "s"){
        document.getElementById("win").style.display="block";
        document.getElementById("back").style.display="block";
      }else {
        document.getElementById("lose").style.display="block";
        document.getElementById("back").style.display="block";
      }
    }


    if (choiceComputer == "p"){
      if(choicePlayer == "s"){
        document.getElementById("lose").style.display="block";
        document.getElementById("back").style.display="block";
      }else {
        document.getElementById("win").style.display="block";
        document.getElementById("back").style.display="block";
      }
    }


    if (choiceComputer == "s"){
      if(choicePlayer == "r"){
        document.getElementById("lose").style.display="block";
        document.getElementById("back").style.display="block";
      }else {
        document.getElementById("win").style.display="block";
        document.getElementById("back").style.display="block";
      }
    }
  }
}
