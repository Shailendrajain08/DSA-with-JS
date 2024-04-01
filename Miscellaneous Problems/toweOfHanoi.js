// function towerOfHanoi(n, fromRod, toRod, usingRod) {
// if(n===1) {
//     console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
//     return
// }
// towerOfHanoi(n-1, fromRod, usingRod, toRod)
// console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
// towerOfHanoi(n-1, usingRod, toRod, fromRod)
// }

// towerOfHanoi(5, 'A', 'C', 'B')


function gcdEuclidean(a, b) {
    // Ensure positive integers
    a = Math.abs(a);
    b = Math.abs(b);

    // Euclidean algorithm
    while (b !== 0) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    
    return a;
}

// Test the function
const num1 = 81;
const num2 = 117;
const gcd = gcdEuclidean(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${gcd}.`);