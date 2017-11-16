//ohmaniamnotgoodwithcomputerplztohelp
$(document).ready(function(){
  //testing testing 1 2 1 2
  console.log("hello world!");
  
  //defining variables
  var hp;
  var atk;
  var spd;
  var def;
  var mdef;
  var choice = false;
  
  //open game on asking your name
  naming();
  function naming(){
    topEdit("What is your name?")
    topEdit("So your name is " + name + "?");
  }
  
  //Writes text and determines position in game
  function topEdit(text) {
    document.getElementById("topbox").innerHTML = text;
  }
  
  
  //testing yes and no here
  

});
/* function hitrate(){
  var weapon = prompt("What is the hit rate?");
  var roll1 = Math.floor(Math.random() * 100);
  var roll2 = Math.floor(Math.random() * 100);
  chance = (roll1 + roll2)/2;
  if (weapon > chance){
    alert("Your weapon's hit rate was " + weapon + ". The hit rate needed to succeed was " + chance +". You hit!");
  }
  else{
    alert("Your weapon's hit rate was " + weapon + ". The hit rate needed to succeed was " + chance + ". You missed.");
  }
} */