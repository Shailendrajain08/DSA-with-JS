// Problem :- Finding Combination of a list of numbers

// Solution 1 : - 

// function combinations(arr, k) {
//     const result = [];

//     function combine(current, start) {
//         if (current.length === k) {
//             result.push(current.slice()); // Push a copy of current to result
//             return;
//         }

//         for (let i = start; i < arr.length; i++) {
//             current.push(arr[i]);
//             combine(current, i + 1);
//             current.pop();
//         }
//     }

//     combine([], 0);
//     return result;
// }

// // Example usage
// const numbers = [1, 2, 3, 4];
// const k = 3; // combination size
// console.log("Combinations:", combinations(numbers, k));


// ================================================================================

// Solution 2 :- 

function combinations(arr, k) {
    const result = [];
    const n = arr.length;

    if (k > n) {
        return result;
    }

    const indices = Array.from({ length: k }, (_, i) => i);

    while (indices[0] <= n - k) {
        const combination = indices.map(i => arr[i]);
        result.push(combination.slice());

        let i = k - 1;
        while (i >= 0 && indices[i] === i + n - k) {
            i--;
        }

        if (i < 0) {
            break;
        }

        indices[i]++;
        for (let j = i + 1; j < k; j++) {
            indices[j] = indices[j - 1] + 1;
        }
    }

    return result;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const k = 3; // combination size
console.log("Combinations:", combinations(numbers, k));
