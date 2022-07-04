/**
 * Problem: Given the array arr, find and return two indices of the array that add up to weight or 
 * return -1 if there is no combination that adds up to weight.
 */


const twoSum = (arr = [], sum) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] === sum) {
                return [i,j]
            }
        }
    }

    return -1;
}

const twoSumAlt = (arr = [], sum) => {
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {

        var current = arr[i], diff = sum - current;

        if (hashTable[current] !== undefined) {
            return [hashTable[sum - diff], i]
        } else {
            hashTable[diff] = i; 
        }
    }

    return -1;
}

// test
console.log(twoSum([1,2,3,4,5],9));
console.log(twoSumAlt([1,2,3,4,5],9));