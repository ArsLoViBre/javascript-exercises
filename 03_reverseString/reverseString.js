const reverseString = function (str) {
    let reversedStr = "";
    for (i = 1; i <= str.length; i++) {
        reversedStr += str.charAt(str.length - i);
    }
    // console.log(str.charAt(-1))
    // console.log(reversedStr);

    return reversedStr;
};

// reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
