var x = 0;
setInterval(myFunction, 1000);
function myFunction(){
  x = x + 1;
  document.getElementById("yee").innerHTML = x;
}