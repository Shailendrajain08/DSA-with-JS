// Problem:- Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Binary search pseudocode  

// 1) If the array is empty, return -1 as the elemet cannot be found.
// 2) If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index. 
// 3) If the target is less than the middle element, binary search left half of the array.
// 4) If the target is greater than middle element, binary search right half of the array.

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search (arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) { 
        return  middleIndex
    }

    if(target < arr[middleIndex]) {
       return search(arr, target, leftIndex, middleIndex)
    }else{
       return search(arr, target, middleIndex + 1, rightIndex)
    }
}


console.log(recursiveBinarySearch([-5, 2, 4, 6, 7, 10], 6))
console.log(recursiveBinarySearch([-10, 2, 4, 6, 7, 10, 21, 54, 61, 75, 87], 75))