// Problem :- Finding permutation of a list of numbers 

// Solution First 

// // Function to find permutations
// function permutations(arr) {
//     let result = [];

//     function permute(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current.slice()); // Push a copy of current to result
//             console.log(remaining.length)
//             return;
//         }
        
//         for (let i = 0; i < remaining.length; i++) {
//             let next = current.concat(remaining[i]);
//             let left = remaining.slice(0, i).concat(remaining.slice(i + 1));
//             permute(next, left);
//         }
//     }

//     permute([], arr);
//     return result;
// }

// // Example usage
// let numbers = [1, 2, 3];
// console.log("Permutations:", permutations(numbers));

// ===============================================================================================

// Solution Second 

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function permuteHeap(arr, n, result) {
    if (n === 1) {
        result.push(arr.slice());
        return;
    }

    for (let i = 0; i < n; i++) {
        permuteHeap(arr, n - 1, result);
        if (n % 2 === 0) {
            swap(arr, i, n - 1);
        } else {
            swap(arr, 0, n - 1);
        }
    }
}

function permute(arr) {
    const result = [];
    permuteHeap(arr, arr.length, result);
    return result;
}

// Example usage
const numbers = [1, 2, 3];
console.log("Permutations:", permute(numbers));
