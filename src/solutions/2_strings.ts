// Write a function that takes a string and returns the number of vowels in the string.
export const countVowels = (str: string): number => {  
  let vowelsCount = Array.from(str.toLowerCase())
   .filter(alphabet => 'aeiou'.includes(alphabet)).length;

  return vowelsCount;
}

// Write a function that takes a string and returns true if the string is a palindrome, and false otherwise.
export const isPalindrome = (str: string): boolean => {

  if (str.length === 0)
    return false;
  // else return true;

  let l = 0;
  let r = str.length-1;

  while(l <= r) {
    if (str.charAt(l) !== str.charAt(r))
      return false;
    l++, r--;
  }
  return true;
}

// Write a function that takes a string and returns the string reversed.
export const reverseString = (str: string): string => {

  if(str.length === 0)
    return "";
  
  return Array.from(str).reverse().join("").toString();

  // // Next: Try implementing the algorithm instead of the built-in JS function
}

// Write a function that takes two strings and returns true if they are anagrams of each other, and false otherwise.
// export const isAnagram = () => {}

// Write a function that takes a string and returns the string with the first letter of each word capitalized.
// export const capitalizeWords = () => {}

// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// export const lengthOfLongestSubstring = () => {}

// Write a function that takes a string and returns a compressed version (e.g., "aabcccccaaa" to "a2b1c5a3").
// export const compressString = () => {}

// Write a function that takes a string and returns the longest palindromic substring.
// export const longestPalindrome = () => {}

// Write a function that takes a string and a pattern (with ? and * wildcards) and returns true if the string matches the pattern.
// export const wildcardMatch = () => {}

// Write a function that takes a string and a regex pattern and returns whether the string matches the pattern.
// export const regexParser = () => {}