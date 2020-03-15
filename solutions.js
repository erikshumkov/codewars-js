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