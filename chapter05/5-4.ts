// 最大值 => 找到第一個1,交換左邊最靠近的0 (X)
// 最大值 => 找到第一個右側為1的0替換成1,把剩的1從位置0開始補
{
  const getMax = (num: number) => {
    console.log('old', num.toString(2))
    let n = num;
    let c0 = 0; // 找出有幾個0
    while (n > 0 && (n & 1) === 0) {
      c0++;
      n = n >> 1;
    }
    let c1 = 0; //找出有幾個1
    while (n > 0 && (n & 1) === 1) {
      c1++;
      n = n >> 1;
    }

    // 無法有更大的數
    if ((num >> (c0 + c1)) === 0) {
      console.log('無法有更大的數')
    }

    // 找出替換的位置
    const p = c0 + c1;
    // 替換
    num = num | (1 << p);
    // 左遮罩
    const leftMask = (-1 << p);
    // 右邊歸0
    num = num & leftMask
    // 建立剩餘的1
    const plusOne = (1 << (c1 - 1)) - 1
    // 合併
    num = num | plusOne;
    console.log('new', num.toString(2))
  };
  // getMax(0b101011101);
}

// 最小值 => 找到第一個0，交換左邊最靠近的1 (X)
// 最小值 => 找到第一個右側為0的1替換成0,接著把1補再後面
{
  const getMin = (num: number) => {
    console.log('old', num.toString(2))
    let n = num;
    let c1 = 0; // 找出幾個1
    while (n > 0 && (n & 1) === 1) {
      c1++;
      n = n >> 1;
    }
    // 沒有更小值
    if (num >> c1 === 0) {
      console.log('沒有更小值')
    }
    // 找出幾個0
    let c0 = 0;
    while (n > 0 && (n & 1) === 0) {
      c0++;
      n = n >> 1;
    }

    // 找出替換的位置
    const p = c0 + c1;
    // 左遮罩
    const leftMask = (-1 << (p + 1));
    // 右邊歸0
    num = num & leftMask;
    // 建立剩餘的1,並移動位置
    const plusOne = ((1 << (c1 + 1)) -1) << (c0 -1);
    // 合併
    num = num | plusOne;
    console.log('new', num.toString(2))
  }
  getMin(0b1100011001)
}