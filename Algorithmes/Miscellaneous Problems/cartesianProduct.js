// Problem:- Given two finite non-empty sets, find their cartesian product. 
// A = [1,2]
// B = [3,4]
// A*B = [[1,3], [1,4], [2,3], [2,4]]

function cartesianProduct (arr1, arr2) {
    const result = []
    for(let i = 0; i< arr1.length; i++){
        for(let j = 0; j< arr2.length; j++){
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(cartesianProduct(arr1, arr2))