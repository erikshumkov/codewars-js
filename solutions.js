// Name of the codewars challenge then the solution.


// Simple validation of a username with regex
const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);



// Find The Parity Outlier
function findOutlier(integers) {
  const oddArr = integers.filter(int => int % 2 === 0);
  const evenArr = integers.filter(int => int % 2 !== 0);

  return oddArr.length === 1 ? oddArr[0] : evenArr[0];
}



// Isograms
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