const convertToZero = (list) => {
  const zeroJMap = new Map();
  const zeroIMap = new Map();
  // 尋找zero
  for(let i = 0; i < list.length ; i++) {
    const subList = list[i];
    for(let j = 0; j < subList.length ; j++) {
      if (zeroIMap.get(i)) {
        break;
      }
      const num = subList[j];
      if (!num) {
        zeroIMap.set(i, true);
        zeroJMap.set(j, true);
      }
    }
  }
  // 替換zero
  for(let i = 0; i < list.length ; i++) {
    const subList = list[i];
    for(let j = 0; j < subList.length ; j++) {
      if (zeroIMap.get(i) || zeroJMap.get(j)) {
        subList[j] = 0;
      }
    }
  }
  
  console.log(zeroIMap, zeroJMap)


  return list;
}
const list = [
  [1,0,3],
  [4,1,6],
  [7,0,2],
];
console.log(convertToZero(list))