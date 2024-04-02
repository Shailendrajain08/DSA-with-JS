// Problem :- write a JS program to resolve Knapsack problem. 

function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                dp[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let selectedItems = [];
    let i = n, w = capacity;
    while (i > 0 && w > 0) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selectedItems.push(i - 1);
            w -= weights[i - 1];
        }
        i--;
    }

    return {
        maxValue: dp[n][capacity],
        selectedItems: selectedItems.reverse()
    };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const result = knapsack(weights, values, capacity);
console.log("Max Value:", result.maxValue);
console.log("Selected Items:", result.selectedItems.map(index => ({ weight: weights[index], value: values[index] })));
