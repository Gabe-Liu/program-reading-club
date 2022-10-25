const checkStrIsNear = (str1, str2) => {
  let isNear = true;
  const str1Len = str1.length;
  const str2Len = str2.length;
  let str1Idx = 0;
  let str2Idx = 0;
  const maxLen = str1Len > str2Len ? str1Len : str2Len;
  let isDiffNum = 0;
  if (Math.abs(str1Len - str2Len) <= 1) {
    for (let i = 0; i < maxLen; i++) {
      const letterA = str1[str1Idx];
      const letterB = str2[str2Idx];
      if (isDiffNum > 1) {
        isNear = false;
        break;
      }
      // 字串數一樣 
      if (str1Len === str2Len) {
        // => 取代
        if (letterA !== letterB) {
          isDiffNum++;
        }
        str1Idx++;
        str2Idx++;
      } else {
        // 刪除
        if (letterA !== letterB) {
          isDiffNum++;
          if (str1Len > str2Len) {
            str1Idx++;
          } else {
            str2Idx++;
          }
        }
      }
      
    }
  } else {
    isNear = false;
  }
  return isNear;
}
console.log(checkStrIsNear('pales', 'bale'))

// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bake => false