const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(666666, 333334);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -20;
    actual = sum(-10, -10);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small numbers', () => {
    expected = 40;
    actual = subtract(100, 60);
    expect(actual).toBe(expected);
  });

  test('can subtract two large numbers', () => {
    expected = 10000000;
    actual = subtract(100000000, 90000000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 0;
    actual = subtract(-5, -5);
    expect(actual).toBe(expected);
  });

  test('can subtract 0', () => {
    expected = 10;
    actual = subtract(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {


  test('can multiply two small integers.', () => {
    expected = 20;
    actual = multiply(10, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two large numbers', () => {
    expected = 250000000000;
    actual = multiply(500000, 500000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negatives', () => {
    expected = 100;
    actual = multiply(-10, -10);
    expect(actual).toBe(expected);
  });

  test('handles multiplying by 0 correctly.', () => {
    expected = 0;
    actual = multiply(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small numbers', () => {
    expected = 50;
    actual = divide(250, 5);
    expect(actual).toBe(expected);
  });

  test('can divide two large numbers', () => {
    expected = 500000;
    actual = divide(250000000000, 500000);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 1;
    actual = divide(-10, -10);
    expect(actual).toBe(expected);
  });

  test('can handle divideing by 0 correctly', () => {
    expected = Infinity;
    actual = divide(100, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulo two small numbers', () => {
    expected = 101;
    actual = modulus(10101, 1000);
    expect(actual).toBe(expected);
  });

  test('can modulo two large numbers', () => {
    expected = 9412;
    actual = modulus(1203934, 23422);
    expect(actual).toBe(expected);
  });

  test('can modulo two negative numbers', () => {
    expected = -101;
    actual = modulus(-101010101, -1000);
    expect(actual).toBe(expected);
  });

  test('can handle modulo by 0 correctly', () => {
    expected = Infinity;
    actual = modulus(100, 0);
    expect(actual).toBeNaN();
  });

});

describe('even', () => {

  test('gives back true when given even', () => {
    actual = even(100);
    expect(actual).toBeTruthy();
  });

  test('gives back false when given odd number', () => {
    actual = even(99);
    expect(actual).toBeFalsy();
  });

  test('gives back true when given large even number', () => {
    actual = even(99823410);
    expect(actual).toBeTruthy();
  });

  test('gives back false when given large odd number', () => {
    actual = even(99823411);
    expect(actual).toBeFalsy();
  });


});

describe('odd', () => {


  test('gives back true when given odd number', () => {
    actual = odd(99);
    expect(actual).toBeTruthy();
  });

  test('gives back false when given large even number', () => {
    actual = odd(99823410);
    expect(actual).toBeFalsy();
  });

  test('gives back false when given even number', () => {
    actual = odd(100);
    expect(actual).toBeFalsy();
  });

  test('gives back true when given large odd number', () => {
    actual = odd(99823411);
    expect(actual).toBeTruthy();
  });

});
