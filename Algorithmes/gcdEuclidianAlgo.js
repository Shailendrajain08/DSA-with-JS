// Problem :- Find Greatest common divisor (GCD) using euclidian algorithm.

function gcdEuclidean (a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while(b!==0){
        if(a>b) {
            a = a-b;
        }else{
            b = b-a;
        }
    }
    return a
}

num1 = 117;
num2 = 81;
const gcd = gcdEuclidean(num1, num2)
console.log(`The GCD of ${num1} and ${num2} is ${gcd}`)