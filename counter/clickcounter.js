let counter = 0;

function coun() {
   counter++
  if (counter > 5) {
    document.getElementById("dolly").disabled=true
  }
 else {
    document.getElementById("counter").innerText = "you clicked" + counter + "times"
  } 
}

function alertt() {
  alert("you are not allowed")
}
function neww() {
  window.print()
}