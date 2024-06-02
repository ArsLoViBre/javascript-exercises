const palindromes = function (str) {
    clearedStr = str.replace(/\W/g, '').toLowerCase();
    divider = Math.floor(clearedStr.length / 2);
    firstHalf = clearedStr.slice(0, divider);
    if (clearedStr.length % 2 !== 0) divider += 1;
    secondHalf = clearedStr.slice(divider, clearedStr.length);
    secondHalfReversed = secondHalf.split("").reverse().join("");
    if (firstHalf === secondHalfReversed) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
