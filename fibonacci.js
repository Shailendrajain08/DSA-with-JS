// Problem :- Write a Javascript program in which give a number 'n', find the fist 'n' of fabonacci sequence. 

// In Mathematics, the fabonacci sequence is a sequence in which each number is the sum of the two preceding ones. 
// Ex:- 
// fibonacci(2) = [0,1] ;
// fibonacci(3) = [0,1,1] ;
// fibonacci(4) = [0,1,1,2] ;
// fibonacci(5) = [0,1,1,2,3] ;
// fibonacci(6) = [0,1,1,2,3,5] ;
// fibonacci(7) = [0,1,1,2,3,5,8] ;


function fabonacci(n) {
    const fab = [0,1]
    for(i = 2; i<n ; i++) {
        fab[i] = fab[i-1] + fab[i-2]
    }
    return fab
}

console.log(fabonacci(13))