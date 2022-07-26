// initialize new empty array

// for loop, iterate through string

let counts = {};

const isValid = (str) => {
  // Loop through the string...
  for (i = 0; i < str.length; i++) {
    let ch = str[i];
    let count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
    console.log(counts);
  }
};

function compareValues(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

isValid("()[]{}");
compareValues(isValid("()[]{}"));
// if bracket is opening ( [ { - push onto array

// next closing character, check if arr is empty
// if not empty, check if matches
// if yes, return true
// if no, return false
// if empty, keep iterating until next opening char

// if there are any left in original array, return false

// q1: modify original array? -not array, it's a string
// q2: goal return? true/false
