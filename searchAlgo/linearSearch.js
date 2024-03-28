// Problem:- Given an Array of 'n' elements and a target element 't', find the index of 't' in the Array. Return -1 if the target element is not found. 

// arr = [-5, 2, 10,4,6], t = 10 -> should return 2 

function linearSearch(n, t) {
    for(let i=0; i<n.length; i++){
        if(n[i] === t){
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, 2, 10,4,6], 10))
console.log(linearSearch([-10, 54, 61,87,21, 75,4,6], 87))