const fibonacci = function (pos) {
    pos = parseInt(pos);
    let result = 1;
    if (pos < 0) return "OOPS";
    if (pos === 0) return 0;
    if (pos === 1) return 1;
    result = fibonacci(pos - 1) + fibonacci(pos - 2);
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
