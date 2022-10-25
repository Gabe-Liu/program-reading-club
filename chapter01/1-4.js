const isPalindromicAnagram = (str) => {
  const obj = {};
  let oddNum = 0;
  for(let i = 0; i < str.length ; i++) {
    const letter = str[i].toLowerCase();
    if (letter && letter !== ' ') {
      if (obj[letter]) {
        obj[letter]++
      } else {
        obj[letter] = 1;
      }
    }
  }
  Object.keys(obj).forEach(key => {
    if (obj[key] % 2) {
      oddNum++;
    }
  });
  return oddNum <= 1;
}
console.log(isPalindromicAnagram('Tacpt Copa'))