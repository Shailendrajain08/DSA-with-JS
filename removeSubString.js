// Problem :- write a JS code to remove common substring from a given string.

// Function to find the longest common substring
function longestCommonSubstring(str1, str2) {
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
                endIndex = i + k - 1;
            }
        }
    }

    // Return the longest common substring
    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Function to remove common substring from a given string
function removeCommonSubstring(str, commonSubstring) {
    return str.replace(commonSubstring, '');
}

// Example usage
const str1 = "abcdef";
const str2 = "xbcdeft";
const commonSubstring = longestCommonSubstring(str1, str2);
const str1AfterRemoval = removeCommonSubstring(str1, commonSubstring);
const str2AfterRemoval = removeCommonSubstring(str2, commonSubstring);

console.log("String 1 after removal:", str1AfterRemoval);
console.log("String 2 after removal:", str2AfterRemoval);
