// problem :- Given a natural number 'n'. Determin if the number is prime or not.

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
    if(n<2){
        return false;
    }
    for(let i = 2; i<n; i++){
        if(n%i === 0) {
            return false
        }
    }
    return true

}

console.log(isPrime(19))
console.log(isPrime(100))
console.log(isPrime(23))
console.log(isPrime(113))
console.log(isPrime(1))
console.log(isPrime(2))