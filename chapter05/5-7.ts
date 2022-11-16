{
  const swapPosition = (num: number): number => {
    console.log('old', (num).toString(2))
    let orign = num;
    let maskOdd =  0;
    let position = 0;
    while(num > 0) {
      maskOdd = (1 << position) | maskOdd;
      position += 2;
      num = num >> 2;
    }
    const oddNum = orign & maskOdd;
    const evenNum = orign & (maskOdd << 1);
    return ((oddNum << 1) | (evenNum >> 1));
  }
  // console.log('new', swapPosition(0b1101110).toString(2))

  // 0xa => 1010
  // 0x5 => 101
  // 8個代表32位元
  // 利用遮罩(0xa,0x5)取得基數與偶數的值，接著基數往左位移，偶數往右位移，進行合併
  const swapPosition2 = (num: number): number => {
    console.log('old', (num).toString(2))
    return ((num & 0xaaaaaaaa) >> 1) | ((num & 0x55555555) << 1);
  }
  console.log('new', swapPosition2(0b111010).toString(2))
}