import { findMax, removeDuplicates, reverseArray } from "../solutions/1_arrays.ts";

describe('arrays', () => {

  let array1: number[];
  let array2: number[];
  let array3: number[];
  let array4: string[];
  let array5: number[];
  let array6: object[];
  let array7: string[];
  let array8: (number | string | object | boolean)[];

  beforeEach(() => {
    array1 = [];
    array2 = [1, 3, 2];
    array3 = [1, 2, 2, 3, 4, 4];
    array4 = ['a', 'b', 'a', 'c'];
    array5 = [1, 1, 1];
    array6 = [{'a': 1}, {'a': 3}, {'a': 1, 'b': 2}, {'a': 3}];
    array7 = ['Steve', 'Smith', 'John', 'Steve', 'Jane'];
    array8 = ['Steve', 2, {'a': 1, 'b': 2}, 'c', '5', true, false, 'c', {'a': 1, 'b': 2}];
  });

  describe('findMax', () => { 
    it('should throw an error when the array is empty', () => {
      expect(() => findMax(array1)).toThrow('Array is empty');
    });

    it('should return the maximum number in the array', () => {
      expect(findMax(array2)).toBe(3);
    });
    
    it('should return the only number in the array when all numbers are the same', () => {
      expect(findMax(array2)).toBe(3);
    });
    
  });
  
  describe('removeDuplicates', () => {
    it('should throw an error when the array is empty', () => {
      expect(() => removeDuplicates(array1)).toThrow('Array is empty');
    });

    it('should remove duplicate numbers', () => {
      expect(removeDuplicates(array3)).toEqual([1, 2, 3, 4]);
    });
    
    it('should remove duplicate alphabets', () => {
      expect(removeDuplicates(array4)).toEqual(['a', 'b', 'c']);
    });
    
    it('should remove duplicate objects', () => {
      expect(removeDuplicates(array6)).toEqual([{'a': 1}, {'a': 3}, {'a': 1, 'b': 2}]);
    });

    it('should remove duplicate strings', () => {
      expect(removeDuplicates(array7)).toEqual(['Steve', 'Smith', 'John', 'Jane']);
    });
    
    it('should remove duplicate contents in the array with mixed primitive and objects values', () => {
      expect(removeDuplicates(array8)).toEqual(['Steve', 2, {'a': 1, 'b': 2}, 'c', '5', true, false]);
    });
  });

  describe('reverseArray', () => {
    it('should throw an error when the array is empty',() => {
      expect(() => reverseArray(array1)).toThrow('Array is empty');
    });

    it('should reverse the numbers in the array', () => {
      expect(reverseArray(array3)).toEqual([4, 4, 3, 2, 2, 1]);
    });

    it('should reverse the characters in the array', () => {
      expect(reverseArray(array4)).toEqual(['c', 'a', 'b', 'a']);
    });
    
    it('should reverse the strings in the array', () => {      
      expect(reverseArray(array7)).toEqual(['Jane', 'Steve', 'John', 'Smith', 'Steve']);
    });

    it('should reverse the objects in the array', () => {      
      expect(reverseArray(array6)).toEqual([{'a': 3}, {'a': 1, 'b': 2}, {'a': 3}, {'a': 1}]);
    });

    it('should reverse the contents of the array with mixed primitive and object values', () => {      
      expect(reverseArray(array8)).toEqual([{'a': 1, 'b': 2}, 'c', false, true, '5', 'c', {'a': 1, 'b': 2}, 2, 'Steve']);
    });
  });
});