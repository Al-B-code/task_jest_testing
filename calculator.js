const sum = function(a, b){
    return a + b;
};

const subtract = function(number1, number2){
    return number1 - number2;
};

const multiply = function(number1, number2){
    return number1 * number2;
};

const divide = function(number1, number2){
    return number1 / number2;
};

const modulus = function(number1, number2){
    return number1 % number2;
};

const even = function(number){
    if (number % 2 === 0){
        return true;
    }
    return false;
};

const odd = function(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
