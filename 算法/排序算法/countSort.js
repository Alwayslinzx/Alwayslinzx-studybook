// 计数排序

module.exports = function countSort(array) {
  if (!array || array.length <= 0) {
    return array;
  }
  let len = array.length
  let countArray = []
  for (let i = 0; i < len; i++) {
    if (countArray[array[i]]) {
      countArray[array[i]]++
    } else {
      countArray[array[i]] = 1
    }
  }
  let resArray = []
  for (let i = 0; i < countArray.length; i++) {
    while(countArray[i]) {
      resArray.push(i)
      countArray[i]--
    }
  }
  return resArray
}