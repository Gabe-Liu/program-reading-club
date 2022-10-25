{
  const a = '()'       // ture
  const b = '()[]{}'   // true
  const c = '(]'       // false
  const d = '([)]'     // false
  const e = '{[]}'     // true

  const isValide = (str: string): boolean => {
    const list = [];
    const mapData = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if ('([{'.includes(char)) {
        list.push(char);
      } else {
        const lastChar = list[list.length - 1];
        if (mapData[lastChar] === char) {
          list.pop();
        } else {
          return false;
        }
      }
    }
    return true;
  }
  console.log(isValide(a));
  console.log(isValide(b));
  console.log(isValide(c));
  console.log(isValide(d));
  console.log(isValide(e));
}