// 快速排序

module.exports = function quickSort(array, l, r) {
  if (l < r) {
    let i = l;
    let j = r;
    let x = array[i];
    while(i < j) {
      while(i < j && x < array[j]) {
        j--;
      }
      if (i < j) {
        array[i] = array[j]
        i++;
      }
      while(i < j && array[i] < x) {
        i++;
      }
      if (i < j) {
        array[j] = array[i] 
        j--;
      }
    }
    array[i] = x;
    quickSort(array, l, i - 1)
    quickSort(array, i + 1, r)
  }
}