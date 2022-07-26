// check if word is palindrome

function checkIfPalindrome(str) {
  // initialize

  // iterate using two counters: first and last index

  for (let f = 0, l = str.length - 1; f < str.length / 2; f++, l--) {
    if (str.length <= 1) {
      return true;
    } else if (str[f] === str[l]) {
      return true;
    }
  }
  return false;

  // return true;
}

function recursivePalindrome(str) {
  let arr = str.split("");

  //   console.log(arr);

  if (arr.length <= 1) {
    return true;
  } else if (arr.pop() == arr.shift()) {
    // let newWord = arr.join("");
    return recursivePalindrome(arr.join(""));
  }

  return false;
}

console.log(checkIfPalindrome(14541));
// console.log(recursivePalindrome("hah"));

// find sum of n number of arguments

function findSum() {
  let count = 0;

  for (num of arguments) {
    count += num;
  }

  return count;
}

// console.log(findSum(1, 2, 3, 4, 5));

// function recursiveSum() {
//   let args = Array.from(arguments);
//   if (args.length == 0) {
//     return 0;
//   } else {
//     console.log(args);
//     return args.pop() + recursiveSum(args);
//   }
// }

// console.log(recursiveSum(1, 2, 3, 4, 5));

// const numbers = [
//   {
//     num: 1,
//   },
//   {
//     num: 2,
//   },
//   {
//     num: 3,
//   },
// ];

// function printNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].num);
//   }
// }

// printNumbers(numbers);

// // destructure right in the for loop
// for (let { num } of numbers) {
//   console.log(num);
// }
