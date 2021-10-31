// 插入排序

module.exports = function insertSort(array) {
  if (!array || array.length <= 0) {
    return array;
  }
  let len = array.length;
  for (let i = 1; i < len; i++) {
    let x = array[i];
    let j = i
    for (; j >= 1 && array[j - 1] > x; j--) {
      array[j] = array[j - 1]
    }
    array[j] = x;
  }
}