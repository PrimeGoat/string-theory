function crazyCase(str) {
  let upper = false;
  let out = "";
  for(let i = 0; i < str.length; i++) {
    out += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    upper = !upper;
  }
  return out;
}

function ciEmailify(name) {
  let out = "";
  for(let i = 0; i < name.length; i++) {
    if(name[i] == ' ') {
      out += '.';
    } else {
      out += name[i].toLowerCase();
    }
  }
  return out + "@codeimmersives.com";
}

function exclaim(str) {
  let out = "";

  for(let i = 0; i < str.length; i++) {
    out += str[i] === "?" || str[i] === "." ? "!" : str[i];
  }
  return out;
}

function reverse(str) {
  let out = "";

  for(let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let upper = false;
  let out = "";
  for(let i = 0; i < str.length; i++) {
    out += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    if(str[i] != " ") {
      upper = !upper;
    }
  }
  return out;
}

function titleCase(str) {
  let wasSpace = 1;
  let out = '';

  for(i = 0; i < str.length; i++) {
    let char = str[i];

    if(str[i] === ' ') {
      wasSpace = 1;
    } else {
      if(wasSpace) {
        char = str[i].toUpperCase();
      } else {
        char = str[i].toLowerCase();
      }
      wasSpace = 0;
    }

    out += char;
  }

  return out;
}

function onlyVowels(str) {
  let out = "";

  for(let i = 0; i < str.length; i++) {
    if(isVowel(str[i])) {
      out += str[i];
    }
  }

  return out;
}
function isVowel(char) {
  switch(char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 1;
    default:
      return 0;
  }
}

function crazyCase3SonOfCrazyCase(str) {
  let upper = false;
  let out = "";
  for(let i = 0; i < str.length; i++) {
    out += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    if(str[i].match(/[a-z]/i)) {
      upper = !upper;
    }
  }
  return out;
}

module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}