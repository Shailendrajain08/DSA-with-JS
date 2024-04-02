// Problem :- Given a number 'n', Find the factorial of that 'n' interger.
 
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// Factorial of zero is 1
// factorail of 4 = 4*3*2*1 = 24 

function factorail (n) {
        let facto = 1;
        for(i = 2; i<=n ; i++) {
            facto = facto * i
        }
        return facto
}

console.log(factorail(5))

// Big-O = O(n) Liner time complexity 