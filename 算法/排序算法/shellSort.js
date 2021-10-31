// 希尔排序

module.exports = function shellSort(array) {
  if (!array || array.length <= 0) {
    return array;
  }
  let len = array.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let x = array[i];
      let j = i;
      for (; j >= gap && x < array[j - gap]; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = x
    }
  }
}