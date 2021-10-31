// 冒泡排序

module.exports = function bubbleSort(array) {
  if (!array || array.length <= 0) {
    return array;
  }
  let len = array.length;
  for(i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}