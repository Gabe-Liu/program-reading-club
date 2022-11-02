{
  const list = ['a', 'b', 'c', 'd', 'e'];
  // const markMap = {};
  // list.forEach(key => {
  //   markMap[key] = 0;
  // });
  const dependList = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c']
  ];
  const listMap = {};
  dependList.forEach(list => {
    if (!listMap[list[0]]) {
      listMap[list[0]] = {
        next: [list[1]]
      };
    } else {
      listMap[list[0]].next.push(list[1]);
    }
  });
  const dependArr: {
    host: string;
    next: string[];
  }[] = Object.keys(listMap).map(key => {
    return {
      host: key,
      next: listMap[key].next
    }
  });
  console.log(dependArr)


}