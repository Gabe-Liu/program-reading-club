const str1 = 'abbc';
const str2 = 'cbabadcbbabbcbabaabccbabc';
// const str2 = 'cbabde';
const obj1 = {};
const obj2 = {};
let count = 0;

for (let i = 0; i < str1.length; i++) {
  const letter = str1[i];
  if (obj1[letter] === undefined) {
    obj1[letter] = 1;
  } else {
    obj1[letter]++;
  }
}


for (let i = 0; i < str2.length; i++) {
  const inLetter = str2[i];
  const outLetter = i >= 4 ? str2[i - 4] : null;
  if (obj2[inLetter] === undefined) {
    obj2[inLetter] = 1;
  } else {
    obj2[inLetter]++;
  }
  if (outLetter) {
    obj2[outLetter]--;
  }
  let isSame = true;
  Object.keys(obj1).forEach(key => {
    if (obj1[key] !== obj2[key]) {
      isSame = false;
    }
  });
  if (isSame) {
    count++;
  }
}

console.log(obj1, obj2, count)