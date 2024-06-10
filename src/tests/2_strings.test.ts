import { countVowels, isPalindrome, reverseString } from "../solutions/2_strings.ts";

describe('strings', () => {
  let string1: string;
  let string2: string;
  let string3: string;
  let string4: string;

  beforeEach(() => {
    string1 = '';
    string2 = 'baby shark';
    string3 = 'b';
    string4 = 'racecar';
  });

  describe('countVowels', () => {
    it('should return 0 if string is empty', () => {
      expect(countVowels(string1)).toBe(0);
    });
    
    it('should return the number of vowels in the string', () => {
      expect(countVowels(string2)).toBe(2);
    });
  });
  
  describe('isPalindrome', () => { 
    it('should return false if string is empty', () => {
      expect(isPalindrome(string1)).toBe(false);
    });
    
    it('should return true if string contains only one letter', () => {
      expect(isPalindrome(string3)).toBe(true);
    });
    
    it('should return true if string is a palindrome', () => {
      expect(isPalindrome(string4)).toBe(true);
    });
    
    it('should return false if string is not a palindrome', () => {
      expect(isPalindrome(string2)).toBe(false);
    });
  });

  describe('reverseString', () => {
    it('should return empty string if the given string is empty', () => {
      expect(reverseString(string1)).toBe('');
    });
    
    it('should return the reverse of the given string', () => {
      expect(reverseString(string2)).toEqual('krahs ybab');
    });
  });

//   describe('isAnagram', () => {});

//   describe('capitalizeWords', () => {});

//   describe('lengthOfLongestSubstring', () => {});

//   describe('compressString', () => {});

//   describe('longestPalindrome', () => {});
  
//   describe('wildcardMatch', () => {});
  
//   describe('regexParser', () => {});
});