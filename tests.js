test('convertIntegerToRoman', function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1: 1 converts to I");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-2: 3999 converts to MMMCMXCIX");
  assert.propEqual(convertIntegerToRoman(0), {value: "", message: 'Out of range (1-3999)', result: false}, "TC-3: 0 is invalid");
  assert.propEqual(convertIntegerToRoman(-1), {value: "", message: 'Please enter a valid integer', result: false}, "TC-4: -1 is invalid");
  assert.propEqual(convertIntegerToRoman(4000), {value: "", message: 'Out of range (1-3999)', result: false}, "TC-5: 4000 is out of range");
  assert.propEqual(convertIntegerToRoman("X"), {value: "", message: 'Please enter a valid integer', result: false}, "TC-6: 'X' is not an integer");
  assert.propEqual(convertIntegerToRoman(1984), {value: "MCMLXXXIV", message: '', result: true}, "TC-7: 1984 converts to MCMLXXXIV");
  assert.propEqual(convertIntegerToRoman(3.14), {value: "", message: 'Please enter a valid integer', result: false}, "TC-8: 3.14 is not a valid integer");
});


test('convertRomanToInteger', function(assert) {
  assert.propEqual(convertRomanToInteger("V"), {value: 5, message: '', result: true}, "TC-9: V converts to 5");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-10: MMMCMXCIX converts to 3999");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11: Empty string is invalid");
  assert.propEqual(convertRomanToInteger("A"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12: 'A' is invalid");
  assert.propEqual(convertRomanToInteger("MMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13: 'MMMM' is out of range");
  assert.propEqual(convertRomanToInteger("1234"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-14: '1234' is not a roman numeral");
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-15: I converts to 1");
});
