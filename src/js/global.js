/**
 * 数组中两个下标交换
 * @param {Array} arr 数组
 * @param {Number} i 数组下标
 * @param {Number} j 数组下标
 */
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
