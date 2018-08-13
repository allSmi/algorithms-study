/**
 * 荷兰国旗问题
 * @param {Array} arr 数组
 * @param {Number} L 数组的开始
 * @param {Number} R 数组的结束
 * @param {Number} num 需要比较的数
 */
function netherLandsflag(arr, L, R, num) {
  let less = L - 1;
  let more = R + 1;
  let cur = L;

  while (cur < more) {
    if (arr[cur] < num) {
      swap(arr, ++less, cur++);
    } else if (arr[cur] > num) {
      swap(arr, --more, cur);
    } else {
      cur++;
    }
  }
  return {
    arr: arr,
    rangeNum: `${less + 1} - ${more - 1}` // 等于num的区间
  };
}

// 测试
let netherLandsflagRes = netherLandsflag([2, 3, 5, 7, 5, 4, 5, 3, 4], 0, 6, 5);
console.log(`netherLandsflagRes: ${netherLandsflagRes.arr}`);
