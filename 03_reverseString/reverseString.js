const reverseString = function (str) {
    let reversedStr = "";
    for (i = 1; i <= str.length; i++) {
        reversedStr += str.charAt(str.length - i);
    }

    return reversedStr;
};


// Do not edit below this line
module.exports = reverseString;
