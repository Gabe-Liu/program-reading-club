// https://www.796t.com/content/1543582382.html
{
  const merge = (n: number, m: number , i: number, j: number) => {
    // 傳進來的m, n均為二進位
    const rightMask = (1 << i) - 1; // ex 0000001111
    const leftMask = (-1 << (j +1)); // ex 1111000000
    const mask = leftMask | rightMask; // ex 1111001111

    // 利用 parseInt() 方法，其它進位制轉十進位制
    // 中間內容去除掉
    const filterN = parseInt(n.toString(), 2) & mask;
    // m移動位置到i
    const moveM = parseInt(m.toString(), 2) << i;
    // 結合
    return filterN | moveM;
  }
  console.log(merge(10000000000,10011,2,6).toString(2))
}

