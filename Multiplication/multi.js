function multi() {
  var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
  var n3 = parseInt(n1) * parseInt(n2);
  document.getElementById("n3").innerText="multi"+n3
}