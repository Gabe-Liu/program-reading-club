// https://lidemy5thwbc.coderbridge.io/2022/02/06/float-precision/
{
 const covertToBinary = (num: number) => {
  console.log('十進位', num)
  let binaryList: string[] = ['0', '.'];

  while(num > 0) {
    if (binaryList.length >= 32) {
      return 'ERROR';
    }
    const b = num * 2;
    if (b & 1) {
      binaryList.push('1');
      num = b - 1;
    } else {
      binaryList.push('0');
      num = b;
    }
  }
 
  return binaryList.join('');
 };
 console.log('二進位', covertToBinary(0.625))
}