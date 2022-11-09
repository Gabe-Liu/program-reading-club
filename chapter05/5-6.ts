// 八進位是使用 0o 或 0O 表示。
// 二進位是使用 0b 或 0B 表示。
{
  const convertNum = (num1: number, num2: number): number => {
    console.log(num1.toString(2))
    console.log(num2.toString(2))
    let counter = 0;
    while(num1 > 0 || num2 > 0) {
      if ((num1 & 1) !== (num2 & 1)) {
        counter++;
      }
      num1 = num1 >> 1;
      num2 = num2 >> 1;
    }
    return counter;
  }
  console.log(convertNum(0b10010,0b010110));
}