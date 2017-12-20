//bearz
Game = {};
Game.run = function(){
  //variables
  Game.bear = "";
  
  
  
  //choose your bear
  Game.chooseBear = function(bear){
    Game.bear = bear;
    document.getElementById("top_box").innerHTML = bear;
    
  }
}
//ohmaniamnotgoodwithcomputerplztohelp