// 堆排序
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }

  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}

// 建立大根堆 heapInsert 算法复杂度O(N)
function heapInsert(arr, index) {
  while (arr[index] > arr[parseInt((index - 1) / 2)]) {
    swap(arr, index, parseInt((index - 1) / 2));
    index = parseInt((index - 1) / 2);
  }
}

// heapify 算法复杂度O(logN)
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  while (left < heapSize) {
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

// 测试
let heapSortArr = [2, 5, 33, 5, 2, 33, 22, 5, 6];
heapSort(heapSortArr);
console.log(`heapSortArrRes:${heapSortArr}`);
