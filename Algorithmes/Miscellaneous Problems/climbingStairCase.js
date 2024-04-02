// Problem:- Given a staircase of 'n' steps, count the number of distinct way to climb to the top. you can either climb-1 or 2 steps at a time. 

// 1 stair = 1 => (1)
// 2 stair = 2 => (1,1) or 2
// 3 stair = 3 => (1,1,1) or (1,2) or (2,1)
// 4 stair = 5 => (1,1,1) or (1,1,2) or (1,2,1) or (2,1,1) or (2,2)
 

function climbingStairCase (n) {
    const noOfWays = [1,2]
    for(let i = 2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n-1]
}

console.log(climbingStairCase(1))
console.log(climbingStairCase(2))
console.log(climbingStairCase(3))
console.log(climbingStairCase(4))
console.log(climbingStairCase(5))

