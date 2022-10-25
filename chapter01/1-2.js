const checkRepeat = (str1, str2) => {
  // return str1.split("").sort().join("") === str2.split("").sort().join("");
  const m1 = new Map();
  str1.split("").map(s => {
    m1.set(s, m1.get(s) ? m1.get(s) + 1 : 1);
  });
  const m2 = new Map();
  str2.split("").map(s => {
    m2.set(s, m2.get(s) ? m2.get(s) + 1 : 1);
  });
  if (m1.size === m2.size) {
    m1.forEach((value, key) => {
      if (value !==  m2.get(key)) {
        return false;
      }
    });
    return true;
  } else {
    return false;
  }
}
