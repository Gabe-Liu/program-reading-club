// 最大值 => 找到第一個1，交換左邊最靠近的0
// 最小值 => 找到第一個0，交換左邊最靠近的1
{
  const getMaxMin = (num: number) => {
    let max = 0;
    while(num > 0) {
      
      num = num >> 1;
    }
  };
  getMaxMin(0b101);
}