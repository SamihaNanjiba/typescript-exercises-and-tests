// 1. Write a function that takes an array of numbers and returns the maximum number.
export const findMax = (array: number[]): number => {
  if (array.length === 0) throw new Error("Array is empty");
  
  let max = array[0];
  array.forEach(item => {
    if (item > max) max = item;
  });
  return max;
}

// 2. Write a function that takes an array and returns a new array with duplicates removed.
export const removeDuplicates = (array: (number | string | object | boolean)[]): (number | string | object | boolean)[] => {
  if (array.length === 0) throw new Error("Array is empty");

  let map = new Map<(number | string | object | boolean), (number | string | object | boolean)>();

  array.forEach((element) => {
    if (typeof element === 'object') {
      const mapKey = Object.entries(element).sort().toString();
      
      if(!map.has(mapKey)) map.set(mapKey, element);
    }
    else {
      if (!map.has(element)) map.set(element, element);
    } 
  });  

  return Array.from(map.values());
}

// 3. Write a function that takes an array and returns a new array with the elements in reverse order.
export const reverseArray = <T>(array: T[]): T[] => {

  // Next: Try with implementing the algorithm instead of the built-in JS function
  if (array.length === 0) throw new Error("Array is empty");

  return array.reverse();
}

// 4. Write a function that takes two arrays and returns an array with the common elements.
// export const commonElements = () => {}

// 5. Write a function that takes an array and a size, and returns an array of chunks, each of size n.
// export const chunkArray = () => {}

// 6. Write a function that takes an array and a number k, and returns the array rotated to the right by k steps.
// export const rotateArray = () => {}

// 7. Write a function that takes an array of consecutive numbers with one missing number and returns the missing number.
// export const findMissingNumber = () => {}

// 8. Write a function that takes two sorted arrays and merges them into a single sorted array.
// export const mergeSortedArrays = () => {}

// 9. Write a function that takes an array of integers and a target sum, and returns the first subarray that sums to the target.
// export const subarraySum = () => {}

// 10. Write a function that takes an array and returns all possible permutations of the array elements.
// export const permutations = () => {}