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