const checkRepeat = (str) => {
  let checker = 0;
  let isRepeat = false;
  for (let i = 0; i < str.length; i++) {
    const num = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    console.log('num', num)
    if ((checker & (1 << num)) > 0) {
      isRepeat = true;
      break;
    }
    checker |= (1 << num);
  }
  return isRepeat;
}
