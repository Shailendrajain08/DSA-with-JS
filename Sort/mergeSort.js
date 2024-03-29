// Problem :- Given an array of integers, sort the array 

// const arr = [-6,20,8,-2,4] 

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


function merge (leftArr, rightArr){
    const SortArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            SortArr.push(leftArr.shift())
        }else{
            SortArr.push(rightArr.shift())
        }
    }
    return [...SortArr, ...leftArr, ...rightArr]
}
const arr = [-6,20,8,-2,4]
console.log(mergeSort(arr))