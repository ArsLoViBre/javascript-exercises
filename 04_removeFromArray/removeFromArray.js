const removeFromArray = function (arr, ...values) {
    values.forEach((val) =>
        arr = arr.filter((arrVal) => arrVal !== val)
    );
    return arr;
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
