// I apologize in advance for all this tremendously unreadable code

// this runtime is Quadratic or O(n^2)
const addToZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0 && i !== j) {
        return true;
      }
    }
  }
  return false;
};
// console.log(addToZero([1, 2, 3, -2]));

// this runtime is Linear or O(n)
const hasUniqueChars = (str) => [...new Set(str)].join('') === str;
// console.log(hasUniqueChars('monday'));

// this runtime is Linearithmic or O(n log n) because the .sort function is O(n log n)
const isPangram = (str) =>
  [...new Set(str.toLowerCase())].sort().join('') ===
  ' abcdefghijklmnopqrstuvwxyz';
console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// this runtime is Linearithmic or O(n log n)
const findLongestWord = (arr) =>
  arr.sort((a, b) => b.length - a.length)[0].length;
// console.log(findLongestWord(['hi', 'hello', 'hellothere']));
