var convertToRoman = function(num) {

  var wholeNum = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var roman = '';

  for (var position  = 0; position < wholeNum.length; position++) {
    while (wholeNum[position] <= num) {
      roman += romanNum[position];
      num -= wholeNum[position];
    }
  }

  return roman;
}

// test here
convertToRoman(36);
