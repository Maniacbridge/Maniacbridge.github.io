//ohmaniamnotgoodwithcomputerplztohelp
var hp;
var atk;
var spd;
var def;
var mdef;
function hitrate(){
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
  var yeet = prompt("This is a super test bois");
  topEdit(yeet);
}
function topEdit(text){
  document.getElementById("topbox").innerHTML = text;
}