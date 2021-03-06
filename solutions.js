// Name of the codewars challenge then the solution.


//1 Simple validation of a username with regex
const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);



//2 Find The Parity Outlier
function findOutlier(integers) {
  const oddArr = integers.filter(int => int % 2 === 0);
  const evenArr = integers.filter(int => int % 2 !== 0);

  return oddArr.length === 1 ? oddArr[0] : evenArr[0];
}



//3 Isograms
function isIsogram(str) {
  var word = str.toLowerCase();
  var obj = {};
  var flag = true;

  // Check all letters length in word
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i]] === undefined) {
      obj[word[i]] = 1;
    } else {
      obj[word[i]]++;
    }
  }

  // If the letter appears more than once, make the flag false.
  for (const property in obj) {
    if (obj[property] > 1) {
      flag = false;
    }
  }

  // return true || false
  return flag;
}

// 4 Regex count lowercase letters
function lowercaseCount(str) {
  const re = /[a-z]+/g;
  const found = str.match(re);
  return found !== null ? found.reduce((acc, curr) => acc += curr).length : 0;
}

// 5 Disemvowel Trolls
const disemvowel = (str) => str.replace(/[aeiou]/gi, "");

// 6 Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  return list.filter(p => p.continent === "Europe" && p.language === "JavaScript").length;
}

// 7 Sum of a Beach
function sumOfABeach(beach) {
  const match = beach.match(/(sand|water|fish|sun)/gi);
  return match !== null ? match.length : 0;
}

// 8 Who likes it?
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// 9 Credit Card Mask
function maskify(cc) {
  if (cc.length !== 4) {
    var re = /[a-z\d]/gi;
    var lastFour = cc.slice(-4);
    var allCharsButLastFour = cc.substring(0, cc.length - 4);
    var mask = allCharsButLastFour.replace(re, "#");
    return mask + lastFour;
  } else {
    return cc;
  }
}

// 10 Nickname Generator
function nicknameGenerator(name) {
  const re = /[aeiou]/;
  if (re.test(name.charAt(2))) {
    return name.substring(0, 4);
  } else if (name.length < 4) {
    return "Error: Name too short";
  } else {
    return name.substring(0, 3);
  }
}

// 11 Create Phone Number
function createPhoneNumber(numbers) {
  const str = numbers.join("");
  const string = "(" + str.substring(0, 3) + ")" + " " + str.substring(3, 6) + "-" + str.slice(-4);
  return string;
}

// 12 Don't give me five!
const dontGiveMeFive = (start, end) => {
  const arr = [];
  const re = /5/;

  for (let i = start; i <= end; i++) {
    if (!re.test(i)) {
      arr.push(i);
    }
  }
  return arr.length;
}

// 13 Find the odd int
function findOdd(A) {
  const obj = {};
  var arr = [];
  A.forEach(n => arr.push(n.toString()));

  for (let i = 0; i < arr.length; i++) {

    if (obj[`${arr[i]}`] === undefined) obj[`${arr[i]}`] = 1;
    else obj[`${arr[i]}`]++;
  }

  for (const prop in obj) {
    if (obj[prop] % 2 !== 0) {
      return +prop;
    }
  }
}

// 14 Remove String Spaces
noSpace = (x) => x.replace(/ /g, "");

// 15 Square Every Digit
function squareDigits(num) {
  var str = `${num}`;
  var numberStr = "";

  for (let i = 0; i < str.length; i++) {
    numberStr += Math.pow(+str[i], 2);
  }

  return +numberStr;
}

// 16 Find the divisors!
function divisors(integer) {
  var arr = [];
  for (let i = 2; i <= integer; i++) {
    if (integer !== i) {
      if (integer % i === 0) arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
};

// 17 Odd or Even?
oddOrEven = array => {
  const num = array.reduce((t, c) => t += c, 0);
  return num % 2 === 0 ? "even" : "odd";
}

// 18 Printer Errors
printerError = (s) => `${s.match(/[n-z]/g) ? s.match(/[n-z]/g).length : 0}/${s.length}`

// 19 Summing a number's digits
sumDigits = (number) => [...("" + Math.abs(number))].reduce((t, c) => t += +c, 0);

// 20 Most digits
findLongest = (array) => {
  const arr = [];
  array.forEach(item => arr.push(item.toString().length));
  const index = arr.indexOf(Math.max(...arr));
  return array[index];
};

// 21 Sort array by string length
sortByLength = (array) => {
  const obj = {};
  array.map(item => {
    obj[item.length] = item
  });
  return Object.values(obj);
};

// 22 Reverse words
const reverseWords = (s) => {
  const a = s.split(" ");
  const mapped = a.map(w => [...w].reverse().join(""));
  return mapped.join(" ");
}

// 23 Reversed Strings
const solution = (str) => str.split("").reverse().join("");

// 24 Sum of a sequence
const sequenceSum = (begin, end, step) => {

  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};

// 25 Are the numbers in order?
const inAscOrder = (arr) => {

  let i = 0;
  let lastIndex;

  for (i; i < arr.length; i++) {

    const lastItem = arr[arr.length - 1];

    if (i > 0) {
      lastIndex = i - 1;

      if (arr[i] < arr[lastIndex]) {
        return false;
      }
    }

    if (arr[i] === lastItem) {
      if (lastItem > lastIndex) {
        return true;
      }
    }

  }
}

// 26 Split Strings 6kyu
function solution(str) {
  const arr = str.split("");
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.length === 1) {
      pairs.push(`${arr.shift()}_`);
      break;
    }
    if (arr.length === 2) {
      pairs.push(arr.splice(0, 2).join(""));
      break;
    }
    pairs.push(arr.splice(0, 2).join(""));
  }

  return pairs;
}

// 27 Counting Sheep...
const countSheeps = (a) => a.filter(v => v === true).length

// 28 FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}

// 29 
function alphabeticShift(inputString) {
  let letterPlusOne = "";

  inputString.toLowerCase().split("").forEach((letter, index) => {
    if (letter === "z") {
      letterPlusOne += "a";
    } else {
      letterPlusOne += String.fromCharCode(inputString.charCodeAt(index) + 1)
    }
  });

  return letterPlusOne;
}

// 30 Check if string is in alphabetic order. Example s = "abc" === true, "zab" === false
function alphabetSubsequence(s) {
  const lettersToValue = s.split("").map((char, index) => s.charCodeAt(index));

  const checkArr = [];

  for (let i = 0; i < lettersToValue.length - 1; i++) {

    if (lettersToValue[i] < lettersToValue[i + 1]) {
      checkArr.push(true);
    } else {
      checkArr.push(false);
    }

  }

  return checkArr.includes(false) ? false : true;
}

// 31 arrayMaxConsecutiveSum
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be 
// arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8

function arrayMaxConsecutiveSum(inputArray, k) {

  let highestSum = 0;

  inputArray.forEach((val, i) => {
    if (inputArray.slice(i, i + k).length === k) {
      let sumOfSlice = inputArray.slice(i, i + k).reduce((a, b) => a += b)
      sumOfSlice > highestSum ? highestSum = sumOfSlice : highestSum;
    }
  })

  return highestSum;
}

// 32 arrayMaximalAdjacentDifference
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {

  let biggestDiff = 0;

  for (let i = 0; i < inputArray.length; i += 1) {

    let slice2 = inputArray.slice(i, i + 2);

    let diff = slice2.sort((a, b) => b - a).reduce((a, b) => a -= b);

    if (diff > biggestDiff) biggestDiff = diff;

  }

  return biggestDiff;

}

// 33 Given a character, check if it represents an odd digit, an even digit or not a digit at all.
// Example
// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".

function characterParity(symbol) {
  if (isNaN(symbol)) {
    return "not a digit";
  } else {
    return +symbol % 2 === 0 ? "even" : "odd";
  }
}

// 34 Check if a string (first argument, str) ends with the given target string (second argument, target).
// Example
// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;

function confirmEnding(str, target) {
  return str.substr(-target.length) === target ? true : false;
}

// 35 contains duplicates. Example [1,2,3,1] = true, [3,2,6] = false. 
function containsDuplicates(a) {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    console.log(a[i], a[i + 1]);
    if (a[i] === a[i + 1]) return true;
  }

  return false;
}

// 36 even digits only. Example n = 2486268 returns true. n = 2463862 returns false.
function evenDigitsOnly(n) {
  const check = n.toString().split("").filter(int => parseInt(int) % 2 !== 0);

  return check.length > 0 ? false : true;
}

// 37 
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
function factorializeANumber(num) {

  const arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr.reduce((a, b) => a * b);
}

// 38
/*
For address = "prettyandsimple@example.com", the output should be findEmailDomain(address) = "example.com";

For address = "<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org", the output should be findEmailDomain(address) = "example.org".
*/
function findEmailDomain(address) {
  return address.substring(address.lastIndexOf('@') + 1);
}
// console.log(findEmailDomain('prettyandsimple@example.com'));
// console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

// 39
/*
Find the leftmost digit that occurs in a given string.

For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';

For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';

For inputString = "0ss", the output should be firstDigit(inputString) = '0'.

*/
function firstDigit(inputString) {
  return inputString.match(/[0-9]/)[0];
}

// console.log(firstDigit('var_1__Int'));
// console.log(firstDigit('q2q-q'));
// console.log(firstDigit('0ss'));

// 40 Reverse A String
// String "hello" will return "olleh"
function reverseAString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseAString('hello'));
// console.log(reverseAString('Howdy'));