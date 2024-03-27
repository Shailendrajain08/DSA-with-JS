// Problem :- Given a posotive integer 'n', determine if the number is a power of 2 or not.

// AN Interger is a power of two if there exists an integer 'x' such that 'n'=== 2x. 

// isPowerOfTwo(1) = true(2^0)
// isPowerOfTwo(2) = true(2^1)
// isPowerOfTwo(5) = false


function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(128))


// function isPowerOfTwo(n) {
//     if (n <= 0) {
//         return false;
//     }
//     // Check if the number has only one bit set
//     return (n & (n - 1)) === 0;
// }

// // Test cases
// console.log(isPowerOfTwo(50)); // Output: true (2^4 = 16)
// console.log(isPowerOfTwo(7));

// Big-O = O(logn)