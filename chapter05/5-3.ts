{
  const getMaxLength = (num: number): number => {
    console.log('二進位表示：', (num).toString(2))
    const list: number[] = [];
    let counter = 0;
    while (num > 0) {
      const isOne = (num & 1) === 1;
      if (isOne) {
        counter++;
      } else {
        if (counter > 0) {
          list.push(counter);
          counter = 0;
        }
        list.push(0);
      }
      num = num >> 1;
    }
    if (counter > 0) {
      list.push(counter);
    }
    console.log(list)
    const result: number[] = [];
    for (let i = 0; i < list.length ; i += 2) {
      const first = list[i];
      const second = list[i + 1];
      const third = list[i + 2];
      if (first !== 0 && second === 0) {
        result.push(first + 1 + (third || 0));
      } else if (first === 0 && second !== 0) {
        result.push((list[i - 1] || 0) + 1 + second);
      } else if (first === 0 && second === 0 && third) {
        // 連續兩個0的情況
        result.push(1 + third);
      }
    }
    console.log(result)
    // let zeroLen = 0;
    // let count1 = 0;
    // let count2 = 0;
    // while(num > 0) {
    //   const isOne = (num & 1) === 1;
    //   if (isOne) {
    //     if (zeroLen % 2) {
    //       count2++;
    //       count1++;
    //     } else {
    //       count1++;
    //     }
    //   } else {
    //     zeroLen++;
    //     if (zeroLen % 2) {
    //       count1++;
    //     } else {
    //       count2++;
    //       // 連續0的處理
    //       if (((num >> 1) & 1) !== 1) {
    //         console.log(count1, count2)
    //         list.push(count1, count2);
    //         count1 = 0;
    //         count2 = 0;
    //         zeroLen = 0;
    //       } else {
    //         // 轉換
    //         list.push(count1);
    //         count1 = count2;
    //         count2 = 0;
    //       }
    //     }
    //   }
    //   num = num >> 1;
    // }
    // // 把最後計算的補加入陣列裡
    // list.push(count1, count2);

    // let index = 0;
    // while(num > 0) {
    //   const isOne = (num & 1) === 1;
    //   if (isOne) {
    //     const prevIndex = index - 1;
    //     if (list[index] === undefined) {
    //       list[index] = 1;
    //       if (prevIndex >= 0 && list[prevIndex]) {
    //         list[prevIndex]++;
    //       }
    //     } else {
    //       list[index]++;
    //       if (prevIndex >= 0 && list[prevIndex]) {
    //         list[prevIndex]++;
    //       }
    //     }
    //   } else {
    //     console.log(index)
    //     if (list[index]) {
    //       list[index]++;
    //     }
    //     if (index + 1 === list.length) {
    //       index++;
    //     }
    //   }
    //   console.log(list)
    //   num = num >> 1;
    // }
    
    // console.log(list)
    return Math.max(...result);
  }
  // console.log(getMaxLength(1775));
  // console.log(getMaxLength(3735));
  console.log(getMaxLength(3215));
}