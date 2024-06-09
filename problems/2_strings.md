# 2. Strings

## Easy

### 1. Count Vowels:

* Write a function that takes a string and returns the number of vowels in the string.

#### Test cases:
* countVowels('hello') -> 2
* countVowels('world') -> 1
* countVowels('aeiou') -> 5
* countVowels('bcdfg') -> 0
* countVowels('') -> 0

### 2.Palindrome Check:

* Write a function that takes a string and returns true if the string is a palindrome, and false otherwise.

#### Test cases:
* isPalindrome('madonna') -> false
* isPalindrome('madam') -> true
* isPalindrome('racecar') -> true
* isPalindrome('hello') -> false
* isPalindrome('') -> true

### 3. Reverse String:

* Write a function that takes a string and returns the string reversed.

#### Test cases:
* reverseString('hello') -> olleh
* reverseString('world') -> dlrow
* reverseString('') -> ``
* reverseString('a') -> a
* reverseString('abcd') -> dcba

## Medium

### 4. Anagram Check:

* Write a function that takes two strings and returns true if they are anagrams of each other, and false otherwise.

#### Test cases:
* isAnagram('listen', 'silent') -> true
* isAnagram('hello', 'world') -> false
* isAnagram('evil', 'vile') -> true
* isAnagram('fluster', 'restful') -> true
* isAnagram('example', 'sample') -> false

### 5. Capitalize Words:

* Write a function that takes a string and returns the string with the first letter of each word capitalized.

#### Test cases:
* capitalizeWords('hello world') -> Hello World
* capitalizeWords('javascript is fun') -> Javascript Is Fun
* capitalizeWords('') -> ``
* capitalizeWords('a quick brown fox') -> A Quick Brown Fox
* capitalizeWords('capitalize') -> Capitalize

### 6. Longest Substring Without Repeating Characters:

* Write a function that takes a string and returns the length of the longest substring without repeating characters.

#### Test cases:
* lengthOfLongestSubstring('abcabcbb') -> 3
* lengthOfLongestSubstring('bbbbb') -> 1
* lengthOfLongestSubstring('pwwkew') -> 3
* lengthOfLongestSubstring('') -> 0
* lengthOfLongestSubstring('aab') -> 2

### 7. String Compression:

* Write a function that takes a string and returns a compressed version (e.g., "aabcccccaaa" to "a2b1c5a3").

#### Test cases:
* compressString('aabcccccaaa') -> a2b1c5a3
* compressString('abc') -> abc
* compressString('aaaaa') -> a5
* compressString('aabbcc') -> a2b2c2
* compressString('') -> ``

## Hard

### 8. Longest Palindromic Substring:

* Write a function that takes a string and returns the longest palindromic substring.

#### Test cases:
* longestPalindrome('babad') -> bab or aba
* longestPalindrome('cbbd') -> bb
* longestPalindrome('a') -> a
* longestPalindrome('ac') -> a or c
* longestPalindrome('racecar') -> racecar

### 9. Wildcard Matching:

* Write a function that takes a string and a pattern (with ? and * wildcards) and returns true if the string matches the pattern.

#### Test cases:
* wildcardMatch('aa', 'a') -> false
* wildcardMatch('aa', '*') -> true
* wildcardMatch('cb', '?a') -> false
* wildcardMatch('adceb', '*a*b') -> true
* wildcardMatch('acdcb', 'a*c?b') -> false

### 10. Regex Parser:

* Write a function that takes a string and a regex pattern and returns whether the string matches the pattern.

#### Test cases:
* regexParser('abc', '^a.c$') -> true
* regexParser('abc', '^a.d$') -> false
* regexParser('hello', 'h.llo') -> true
* regexParser('hello', 'h.*o') -> true
* regexParser('hello', '^h.*d$') -> false