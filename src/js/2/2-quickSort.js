/**
 * 经典快排 （小于等于最后一个数放左边，大于最后一个数放右边，这样的问题是一次只能排一个数即最后一个数）
 * 经典快排（改进版：小于最后一个数放左边，大于最后一个数放右边，等于最后一个数放中间，改进后等于最后一个数的那些都放在中间了，可能会一次排多个数）
 * 随机快排 （经典快排有一个数据分布不均的问题，影响算法复杂度，可能变为O(n^2)，使用随机快排，会变为一个概率问题，长期期望的算法复杂度为O(N*logN)）
 * @param {Array} arr 数组
 * @param {Number} L 排序开始
 * @param {Number} R 排序结束
 */
function quickSort(arr, L, R) {
  if (L < R) {
    swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R); // 这一行代码将变为随机快排
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
  swap(arr, more, R); // 46:30
  return [less + 1, more];
}

// 测试
let quickSortArr = [2, 3, 1, 7, 4, 5, 8, 4, 5, 2, 6, 7, 3, 0, 9];
quickSort(quickSortArr, 0, quickSortArr.length - 1);
console.log(`quickSortArr:${quickSortArr}`);
