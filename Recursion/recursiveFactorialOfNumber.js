// Problem :- Given a number 'n', Find the factorial of that 'n' interger.

// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// Factorial of zero is 1
// factorail of 4 = 4*3*2*1 = 24 

function recursiveFactorail(n) {

    if (n === 0){
        return 1
    }
    return n * recursiveFactorail(n-1)
}


console.log(recursiveFactorail(5))
console.log(recursiveFactorail(8))
console.log(recursiveFactorail(13)) 

// Big-O = O(n)