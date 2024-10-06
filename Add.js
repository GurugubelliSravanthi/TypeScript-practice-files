function add() {
  let n1 = document.getElementById('num1').value
  let n2 = document.getElementById('num2').value
  let num3 = parseInt(n1) + parseInt(n2)
  document.getElementById('num3').innerText="sum = "+num3
}
function sub() {
  let n1 = document.getElementById('num1').value
  let n2 = document.getElementById('num2').value
  let num3 = parseInt(n1) - parseInt(n2)
  document.getElementById('num3').innerText="sub = "+num3

}
function multi() {
  let n1 = document.getElementById('num1').value
  let n2 = document.getElementById('num2').value
  let num3 = parseInt(n1) * parseInt(n2)
  document.getElementById('num3').innerText="multi = "+num3

}

function div() {
  let n1 = document.getElementById('num1').value
  let n2 = document.getElementById('num2').value
  let num3 = parseInt(n1) / parseInt(n2)
  document.getElementById('num3').innerText="div = "+num3

}
