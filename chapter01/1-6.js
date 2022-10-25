const convertStr = (str) => {
  let newStr = '';
  let count = 0;
  let flagLetter = str[0];
  for (let i = 0; i < str.length ; i++) {
    const letter = str[i];
    if (flagLetter !== letter) {
      newStr += flagLetter + count;
      flagLetter = letter;
      count = 1;
    } else {
      count++;
    }
  }
  // 最後一個
  newStr += flagLetter + count;
  return str.length <= newStr.length ? str : newStr;
}

console.log(convertStr('aabccccaa'))