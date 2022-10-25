const isPalindromicAnagram = (str) => {
  let check = 0;
  for(let i = 0; i < str.length ; i++) {
    const letter = str[i].toLowerCase();
    const num = letter.charCodeAt(0) - 'a'.charCodeAt(0);
    // 空白小於0
    if (num >= 0) {
      const result = 1 << num;
      const isExist = (check & result) > 0;
      if (isExist) {
        check ^= result;
      } else {
        check |= result;
      }
    }
  }
  // 換成2進位字串
  const numStr = check.toString(2);
  return 1 << (numStr.length - 1) === check;
}
console.log(isPalindromicAnagram('Tact Coa'))