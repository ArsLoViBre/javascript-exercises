const sumAll = function (num1, num2) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number') return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num2 < num1) num2 = [num1, num1 = num2][0];
    sumNum = 0;
    for (i = num1; i <= num2; i++) {
        sumNum += i;
    }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
