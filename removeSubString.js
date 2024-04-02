// Function definition
function removeSubstring(str1, str2) {
    let maxLength = 0;
    let endIndex = 0;

    // Initialize variables for loop control
    let i, j;

    // Iterate over the first string
    for (i = 0; i < str1.length; i++) {
        // Iterate over the second string
        for (j = 0; j < str2.length; j++) {
            let k = 0;
            // Compare characters as long as they match
            while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
                k++;
            }
            // If we found a longer common substring, update maxLength and endIndex
            if (k > maxLength) {
                maxLength = k;
                endIndex = i;
            }
        }
    }

    // Return the longest common substring
    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Example usage
const str1 = "abcdef";
const str2 = "xbcdeft";
console.log("Longest Common Substring:", removeSubstring(str1, str2)); // Output: "ab"

