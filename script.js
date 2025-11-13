function init(){
 var alert = document.getElementById("entrybutton").addEventListener("click", myFunction);
}

function myFunction() {
  var txt = document.getElementById("entryinput").value;

  document.getElementById("textoutput").innerHTML = txt;


  alert("Danasha: " + txt);
}

window.addEventListener('load', init);