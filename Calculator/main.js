let resultBox = document.getElementById("calcResult");

//Addition
let add1 = document.getElementById("add1")
let add2 = document.getElementById("add2")

function getSum(){
  let result = (Number(add1.value) | 0) + (Number(add2.value) | 0)
  resultBox.innerHTML = "Sum: " + result;
  add1.value = "";
  add2.value = "";
}

//Subtraction
let sub1 = document.getElementById("sub1")
let sub2 = document.getElementById("sub2")

function getDiff(){
  let result = (Number(sub1.value) | 0) - (Number(sub2.value) | 0)
  resultBox.innerHTML = "Difference: " + result;
  sub1.value = "";
  sub2.value = "";
}

//Multiplication
let mult1 = document.getElementById("mult1")
let mult2 = document.getElementById("mult2")

function getProduct(){
  let result = (Number(mult1.value) | 0) * (Number(mult2.value) | 0)
  resultBox.innerHTML = "Product: " + result;
  mult1.value = "";
  mult2.value = "";
}

//Division
let divide1 = document.getElementById("divide1")
let divide2 = document.getElementById("divide2")

function getQuotient(){
  let result = (Number(divide1.value) | 0) / (Number(divide2.value) | 0)
  resultBox.innerHTML = "Quotient: " + result;
  divide1.value = "";
  divide2.value = "";
}