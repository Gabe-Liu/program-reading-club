const str1 = 'abbc';
const str2 = 'cbabadcbbabbcbabaabccbabc';
// const str2 = 'cbabadcbbabbcbab';
// const str2 = 'acbba';
const obj1 = {};
let obj2 = {};
let count = 0;

for (let i = 0; i < str1.length; i++) {
  const letter = str1[i];
  if (obj1[letter] === undefined) {
    obj1[letter] = 1;
  } else {
    obj1[letter]++;
  }
}
obj2 = { ...obj1 };
let len = str1.length;
let isClear = false;
let clearCount = 0;
for (let i = 0; i < str2.length; i++) {
  const letter = str2[i];
  if (obj2[letter] === undefined) {
    obj2 = { ...obj1 };
    len = str1.length;
    isClear = true;
    clearCount = 0;
    // console.log('清空', letter)
  } else {
    
    const popLetter = str2[i - str1.length];
    // console.log('popLetter', popLetter, i - str1.length)
    // 要移除的字
    // console.log(popLetter)
    if (popLetter && !isClear) {
      // console.log(obj2[popLetter] !== undefined)
      if (obj2[popLetter] !== undefined) {
        obj2[popLetter]++;
        if (obj2[popLetter] > 0) {
          len++;
        }
        // console.log('移除 字', popLetter)
        // console.log('len++', len)
      }
    }

    // 要新增的字
    obj2[letter]--;
    // console.log('新增 字', letter, obj2[letter])
    if (obj2[letter] < 0) {
      // len++;
      // obj2[letter] = 0;
      // console.log('調整後')
      // console.log('letter', letter, obj2[letter])
      // console.log('len++', len)
    } else {
      len--;
      // console.log('len--', len)
      if (obj2[letter] === 0) {
        if (len === 0) {
          count++;
          console.log(count, str2[i - 3], str2[i - 2], str2[i - 1], str2[i])
        }
      }
    }

    clearCount++;
    if (clearCount === str1.length) {
      isClear = false;
    }
  }
}

// console.log(count)