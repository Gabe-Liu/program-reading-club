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
  console.log('new', swapPosition(0b1101110).toString(2))
}