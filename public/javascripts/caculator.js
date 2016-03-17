'use strict';
let num1 = '';
let num2 = '';
let operator;

$(document).ready(function() {
  numberButtonClick();
  operationButtonClick();
});

function numberButtonClick() {
  $('[name="number"]').click(function (){
    let current = $(this).text();
    if(operator){
      num2 += current;
      updateNumber(num2);
    } else{
      num1 += current;
      updateNumber(num1);
    }
  });
}

function clearScreen() {
  if(operator) {
    num2 = '';
    updateNumber(num2.length);
  } else{
    num1 = '';
    updateNumber(num1.length);
  }
}

function operationButtonClick() {
  $('[name="operator"]').click(function (){
    let currentOperator = $(this).text();
    switch(currentOperator) {
      case 'C':
        clearScreen();
        break;
      case '%':
        apiPercentage();
        break;
      case '+/-':
        apiNegative();
        break;
      case '=':
        chooseApi();
        break;
      default:
        operator = currentOperator;
        break;
    }
  });
}

function chooseApi() {
  switch(operator) {
      case '+':
          apiAdd();
          break;
      case '-':
          apiMinus();
          break;
      case '*':
          apiMultiply();
          break;
      case '/':
          apiDivision();
          break;
      default:
          break;
  }
  operator = "";
  num1 = num2;
  num2 = "";
  updateNumber(num1);
}

function apiPercentage() {
  $.post('/api/percentage', {num1 : num1}, (data)=>{
    num1 = data;
    updateNumber(data);
  });
}


function apiNegative() {
  $.post('/api/negative', {num1 : num1}, (data)=>{
    num1 = data;
    updateNumber(data);
  });
}

function apiAdd() {
  $.post('/api/add', {num1 : num1, num2: num2 }, (data)=>{
    num1 = data;
    updateNumber(data);
  });
}

function apiMinus() {
  $.post('/api/minus', {num1 : num1, num2: num2 }, (data)=>{
    num1 = data;
    updateNumber(data);
  });
}

function apiMultiply() {
  $.post('/api/multiply', {num1 : num1, num2: num2 }, (data)=>{
    num1 = data;
    updateNumber(data);
  });
}

function apiDivision() {
  $.post('/api/division', {num1 : num1, num2: num2 }, (data)=>{
    if(data === null) {
      updateNumber('Infinity');
      num1 = '';
    } else{
      updateNumber(data);
      num1 = data;
    }
  });
}

function updateNumber(number) {
  $('#screen h2').text(number);
}
