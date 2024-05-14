// Constants for the literals
var INVALID_ROMAN = 'Please enter a valid roman';
var INVALID_INTEGER = 'Please enter a valid integer';
var OUT_OF_RANGE = 'Out of range (1-3999)';

function init() { 
  // Load elements once to avoid repetition on every invocation
  var modeCheckbox = document.querySelector('input[type="checkbox"]');
  var header = document.querySelector('h1');
  var convertButton = document.querySelector('.convert-button');
  var outputArea = document.querySelector('.convert-output');
  var inputArea = document.querySelector('input[type="text"]');

  modeCheckbox.addEventListener('change', function(e) {
    header.innerHTML = getModeTitle(e.target.checked);
  });

  function getModeTitle(integerToRoman) {
    return integerToRoman ? 'Integer To Roman' : 'Roman To Integer';
  }

  convertButton.addEventListener('click', function() {
    var inputValue = inputArea.value;
    var conversion = modeCheckbox.checked ? convertIntegerToRoman(inputValue) : convertRomanToInteger(inputValue);
    if (conversion.result) {
      outputArea.innerHTML = conversion.value;
    } else {
      alert(conversion.message);
    }
  });
}

function convertRomanToInteger(roman) {
  var response = {
    value: 0, 
    message: '',
    result: false 
  };

  var romanNumeralRegex = new RegExp(
    /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );

  roman = roman.toUpperCase();
  var regexResult = romanNumeralRegex.test(roman);

  if (!regexResult || roman.length === 0) {
    response.message = INVALID_ROMAN;
    return response;
  }

  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var sum = 0;
  var currentValue, nextValue;
  for (var i = 0; i < roman.length; i++) {
    currentValue = values[roman.charAt(i)];
    nextValue = i + 1 < roman.length ? values[roman.charAt(i + 1)] : 0;

    // If the current value is less than the next value, subtract, otherwise add
    if (currentValue < nextValue) {
      sum -= currentValue;
    } else {
      sum += currentValue;
    }
  }

  response.value = sum;
  response.result = true;
  return response;
}


function convertIntegerToRoman(num) {
  var response = {
    value: '',
    message: '', 
    result: false 
  };

  var numberRegex = new RegExp(/^\d+$/);
  if (!numberRegex.test(num)) {
    response.message = INVALID_INTEGER;
    return response;
  }

  if (Number(num) > 3999 || Number(num) < 1) {
    response.message = OUT_OF_RANGE;
    return response;
  }

  var mapping = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  var result = '';
  var keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (var i = 0; i < keys.length; i++) {
    while (num >= keys[i]) {
      result += mapping[keys[i]];
      num -= keys[i];
    }
  }

  response.value = result;
  response.result = true;
  return response;
}

function repeat(str, count) {
  var repeated = '';
  for (var i = 0; i < count; i++) {
    repeated += str;
  }
  return repeated;
}
