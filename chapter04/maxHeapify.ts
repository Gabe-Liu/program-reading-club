// https://chupai.github.io/posts/2006/sort_algorithm_heap_sort/#1-%E5%A0%86%E7%A9%8D%E5%8C%96
{
  function buildMaxHeap(arr) {
    let n = arr.length;
    const lastParent = Math.floor(n / 2) - 1;

    for (let i = lastParent; i >= 0; i--) {
      maxHeapify(arr, i, n);
    }
  }

  function maxHeapify(arr, index, heapSize) {
    const iLeft = 2 * index + 1; // 1
    const iRight = iLeft + 1;    // 2
    let iMax = index;            // 3

    // 4
    if (iLeft < heapSize && arr[iMax] < arr[iLeft]) {
      iMax = iLeft;
    }
    if (iRight < heapSize && arr[iMax] < arr[iRight]) {
      iMax = iRight;
    }
    // 5
    if (iMax !== index) {
      swap(arr, iMax, index);
      maxHeapify(arr, iMax, heapSize);
    }
  }

  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function heapSort(arr) {

    const n = arr.length;
    buildMaxHeap(arr);    // 1

    // 2
    for (let i = n - 1; i > 0; i--) {
      swap(arr, 0, i);        // 3
      maxHeapify(arr, 0, i);  // 4
    }
  }
  const nums = [10, 50, 30, 60, 15, 40];
  heapSort(nums);
  console.log(nums)
}
