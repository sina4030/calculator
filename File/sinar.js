function calculatePower(power) {
    var resultField = document.getElementsByName('display')[0];
    var value = parseFloat(resultField.value);
  
    if (!isNaN(value)) {
      var poweredValue = Math.pow(value, power);
      resultField.value = poweredValue;
    }
  }
  
  function calculateFactorial() {
    var resultField = document.getElementsByName('display')[0];
    var value = parseFloat(resultField.value);
  
    if (!isNaN(value)) {
      var factorialValue = 1;
      for (var i = 2; i <= value; i++) {
        factorialValue *= i;
      }
      resultField.value = factorialValue;
    }
  }
  

  
  



function calculateSine() {
  var resultField = document.getElementsByName('display')[0];
  var value = parseFloat(resultField.value);

  if (!isNaN(x)) {
    var result = Math.sin(x);
    resultField.value = poweredValue;
    alert("sin(" + x + ") = " + result);
  } else {
    alert("Please enter a valid number for the angle.");
  }
}
  
  
