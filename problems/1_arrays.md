# 1. Arrays

## Easy

### 1. Find Max Number:

* Write a function that takes an array of numbers and returns the maximum number.

#### Test cases:
* findMax([1, 3, 2]) -> 3
* findMax([10, 5, 100, 50]) -> 100
* findMax([-1, -3, -2]) -> -1
* findMax([0, 0, 0]) -> 0
* findMax([7]) -> 7

### 2. Remove Duplicates:

* Write a function that takes an array and returns a new array with duplicates removed.

#### Test cases:
* removeDuplicates([1, 2, 2, 3, 4, 4]) -> [1, 2, 3, 4]
* removeDuplicates(['a', 'b', 'a']) -> ['a', 'b']
* removeDuplicates([1, 1, 1]) -> [1]
* removeDuplicates([1, 2, 3]) -> [1, 2, 3]
* removeDuplicates([]) -> []

### 3. Reverse Array:

* Write a function that takes an array and returns a new array with the elements in reverse order.

#### Test cases:
* reverseArray([1, 2, 3]) -> [3, 2, 1]
* reverseArray(['a', 'b', 'c']) -> ['c', 'b', 'a']
* reverseArray([true, false]) -> [false, true]
* reverseArray([]) -> []
* reverseArray([1]) -> [1]

## Medium

### 4. Common Elements:

* Write a function that takes two arrays and returns an array with the common elements.

#### Test cases:
* commonElements([1, 2, 3], [2, 3, 4]) -> [2, 3]
* commonElements(['a', 'b'], ['b', 'c']) -> ['b']
* commonElements([1, 2, 3], [4, 5, 6]) -> []
* commonElements([1, 2, 3, 4], [2, 4, 6, 8]) -> [2, 4]
* commonElements([], [1, 2, 3]) -> []

### 5. Chunk Array:

* Write a function that takes an array and a size, and returns an array of chunks, each of size n.

#### Test cases:
* chunkArray([1, 2, 3, 4], 2) -> [[1, 2], [3, 4]]
* chunkArray([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
* chunkArray([1, 2, 3], 1) -> [[1], [2], [3]]
* chunkArray([1, 2, 3, 4, 5, 6], 3) -> [[1, 2, 3], [4, 5, 6]]
* chunkArray([], 2) -> []

### 6. Rotate Array:

* Write a function that takes an array and a number k, and returns the array rotated to the right by k steps.

#### Test cases:
* rotateArray([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]
* rotateArray([1, 2, 3], 1) -> [3, 1, 2]
* rotateArray([1, 2, 3], 3) -> [1, 2, 3]
* rotateArray([1, 2, 3, 4], 5) -> [4, 1, 2, 3]
* rotateArray([], 2) -> []

### 7. Find Missing Number:

* Write a function that takes an array of consecutive numbers with one missing number and returns the missing number.

#### Test cases:
* findMissingNumber([1, 2, 4, 5]) -> 3
* findMissingNumber([10, 11, 13]) -> 12
* findMissingNumber([1, 3]) -> 2
* findMissingNumber([100, 101, 102, 104]) -> 103
* findMissingNumber([1, 2, 3, 4, 6]) -> 5

## Hard

### 8. Merge Sorted Arrays:

* Write a function that takes two sorted arrays and merges them into a single sorted array.

#### Test cases:
* mergeSortedArrays([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]
* mergeSortedArrays([1, 2, 3], [4, 5, 6]) -> [1, 2, 3, 4, 5, 6]
* mergeSortedArrays([1], [2]) -> [1, 2]
* mergeSortedArrays([], [1, 2, 3]) -> [1, 2, 3]
* mergeSortedArrays([1, 2, 3], []) -> [1, 2, 3]

### 9. Subarray Sum:

* Write a function that takes an array of integers and a target sum, and returns the first subarray that sums to the target.

#### Test cases:
* subarraySum([1, 2, 3, 4, 5], 9) -> [2, 3, 4]
* subarraySum([1, 2, 3, 4, 5], 12) -> [3, 4, 5]
* subarraySum([1, 2, 3, 7, 5], 12) -> [3, 7, 2]
* subarraySum([1, 2, 3], 5) -> [2, 3]
* subarraySum([1, 2, 3], 6) -> [1, 2, 3]

### 10. Permutations:

* Write a function that takes an array and returns all possible permutations of the array elements.

#### Test cases:
* permutations([1, 2]) -> [[1, 2], [2, 1]]
* permutations([1, 2, 3]) -> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
* permutations(['a', 'b']) -> [['a', 'b'], ['b', 'a']]
* permutations([1]) -> [[1]]
* permutations([]) -> []
