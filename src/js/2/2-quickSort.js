/**
 * 快排
 * @param {Array} arr 数组
 * @param {Number} L 排序开始
 * @param {Number} R 排序结束
 */
function quickSort(arr, L, R) {
  if (L < R) {
    let p = partition(arr, L, R);
    quickSort(arr, L, p[0] - 1);
    quickSort(arr, p[1] + 1, R);
  }
}

/**
 * @param {Array} arr 数组
 * @param {Number} L 数组的开始
 * @param {Number} R 数组的结束
 * @returns {Array} 等于数组最后一个数的区间
 */
function partition(arr, L, R) {
  let less = L - 1;
  let more = R;
  let cur = L;

  while (cur < more) {
    if (arr[cur] < arr[R]) {
      swap(arr, ++less, cur++);
    } else if (arr[cur] > arr[R]) {
      swap(arr, --more, cur);
    } else {
      cur++;
    }
  }
  swap(arr, more, R);
  return [less + 1, more];
}

// 测试
let quickSortArr = [2, 3, 1, 7, 4, 5, 8, 4, 5, 2, 6, 7, 3, 0, 9];
quickSort(quickSortArr, 0, quickSortArr.length - 1);
console.log(`quickSortArr:${quickSortArr}`);
