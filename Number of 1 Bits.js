// 191. Number of 1 Bits

// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n===0) return 0;
    var binary=n.toString(2);
    return binary.match(/1/g).length;
};