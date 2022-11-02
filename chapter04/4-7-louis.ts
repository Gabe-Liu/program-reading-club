// 建構順序：您將得到一個專案列表和一個依賴專案列表
// （這是一個由一對對專案組成的列表，在每一對中第二個專案依賴第一個專案）。
// 在一個專案開始建構之前，必須先建構好該專案所有的依賴專案。
// 請找到一個能讓專案順利建構的順序。如果找不到有效的建構順序，則回傳一個錯誤
// 範例
// 輸入：
//   專案：a, b, c, d, e, f
//   依賴專案列表：(a, d), (f, b), (b, d), (f, a), (d, c)
// 輸出：f, e, a, b, d, c
// 提示：#26, #47, #60, #85, #125, #133

const projectList = ['a', 'b', 'c', 'd', 'e', 'f'];
const relyList = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
const projectList2 = ['a', 'b', 'c'];
const relyList2 = [['a', 'b'], ['b', 'c'], ['c', 'b']];

interface RelyMap {
    [pjt: string]: {
        rely: string[];
        user: string[];
    };
}
const getRelyMap = (relyList: string[][]): RelyMap => {
    const relyMap: RelyMap = {};
    relyList.forEach(rely => {
        const relyPjt = rely[0];
        const relyPjtData = relyMap[relyPjt] ||
            (relyMap[relyPjt] = { rely: [], user: [] });
        const pjt = rely[1];
        const pjtData = relyMap[pjt] ||
            (relyMap[pjt] = { rely: [], user: [] });
        if (!relyPjtData.user.includes(pjt)) { relyPjtData.user.push(pjt) }
        if (!pjtData.rely.includes(relyPjt)) { pjtData.rely.push(relyPjt) }
    });
    return relyMap;
};

const getRelyProjectMap = (projectList: string[], relyList: string[][]): string[] => {
    const relyMap = getRelyMap(relyList);
    const result: string[] = [];
    const added = {};
    let nextList = projectList;
    let checkList: string[] = [];
    console.log(relyMap);

    while (nextList.length) {
      console.log(nextList)
        checkList = nextList;
        nextList = [];
        for (let i = 0; i < checkList.length; i++) {
            const pjt = checkList[i];
            const pjtData = relyMap[pjt];
            if (
                added[pjt] ||
                pjtData?.rely.length &&
                pjtData.rely.some(ele => !added[ele])
            ) {
                continue;
            }
            added[pjt] = true;
            result.push(pjt);
            pjtData?.user.forEach(p => !added[p] && nextList.push(p))
        }
    }
    
    return result.length === projectList.length ? result : null;
};

// console.log(getRelyProjectMap(projectList, relyList));
console.log(getRelyProjectMap(projectList2, relyList2));