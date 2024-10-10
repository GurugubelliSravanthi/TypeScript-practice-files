function sub() {
  var number1 = document.getElementById("n1").value;
  var number2 = document.getElementById("n2").value;
  var number3 = parseInt(number1) -parseInt(number2);
  
  document.getElementById("number3").innerText="sub="+number3
}